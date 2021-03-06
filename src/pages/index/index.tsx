import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import Taro, { Component, Config } from "@tarojs/taro";
import { ComponentClass } from "react";
import UnLoggedInView from "../../components/unlogged-in-view";
import "taro-ui/dist/style/index.scss"; // 引入组件样式 - 方式一
import citilogin from "../../services/citi-login";
import { login, logout, setUser } from "../../actions/login";
import LoggedInView from "../../components/logged-in-view";
import User from "../../services/user";
import "./index.styl";
import HardwayLayout from "../layout";

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  index: { loading: false; user: null };
};

type PageDispatchProps = {
  login: () => void;
  logout: () => void;
  setUser: (user) => void;
  citiLogin: () => void;
  tokenLogin: () => void;
};

type PageOwnProps = {};

type PageState = {
  popup: any;
  showDrawer: boolean;
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Index {
  props: IProps;
}

@connect(
  ({ index }) => ({
    index
  }),
  dispatch => ({
    login() {
      dispatch(login());
      User.login().then(user => dispatch(setUser(user)));
    },
    logout() {
      dispatch(logout());
      Taro.setStorageSync("userInfo", null);
      User.logout();
      dispatch(setUser(null));
    },
    setUser(user) {
      dispatch(setUser(user));
    },
    citiLogin() {
      citilogin(dispatch);
    },
    tokenLogin(token: string) {
      dispatch(login());
      User.loginByToken(dispatch)({ token }).then();
    }
  })
)
class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "我的个人中心"
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  state: PageState = { popup: null, showDrawer: false };

  componentWillUnmount() {}

  componentDidShow() {
    this.props.setUser(User.get() || Taro.getStorageSync("userInfo"));
  }

  componentDidHide() {}

  handleClick() {
    console.log(arguments);
  }

  showDrawer() {
    this.setState({ showDrawer: true });
  }

  onCloseDrawer() {
    this.setState({ showDrawer: false });
  }

  render() {
    return (
      <HardwayLayout>
        <View className="container">
          {!this.props.index.user ? (
            <UnLoggedInView {...this.props} />
          ) : (
            <LoggedInView {...this.props} />
          )}
        </View>
      </HardwayLayout>
    );
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index as ComponentClass<PageOwnProps, PageState>;
