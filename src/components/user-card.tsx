import Taro, { Component } from '@tarojs/taro'
import { AtList, AtListItem, AtCard } from 'taro-ui'
import { User } from 'msal'
import './user-card.styl'
import { View } from '@tarojs/components'

type UserCardProps = {
  user: User | null | any
}

type UserCardState = {
  profile: any
}

export default class UserCard extends Component<UserCardProps, UserCardState> {
  constructor(props) {
    super(props)

    if (props.user.provider === 'citi') {
      this.state = {
        profile: JSON.parse(props.user.profile),
      }
    }
  }

  render(): any {
    return this.props.user &&
      (this.props.user.idToken &&
        this.props.user.idToken.emails ? (
          <AtList>
            {this.props.user.idToken.emails.map(email => (
              <AtListItem title={email} key={email} />
            ))}
          </AtList>
        ) : (
          <AtCard
            title={this.props.user.display_name}
            note={this.props.user.createdAt}
            thumb='https://sandbox.apihub.citi.com/gcb/authCode/resources/images/Citi-Enterprise-White.png'
            extra={this.state.profile ? this.state.profile.customerType : ''}
          >
            {this.renderObject(this.state.profile)}
          </AtCard>
        )
      )
  }

  renderObject(o: any) {
    if (!o) return ''

    const renderThat = (key: string) => this.renderIt(o[key], key)

    return (
      <View className='at-article'>
        {Object.keys(o).map(renderThat)}
      </View>
    )
  }

  renderIt(o: any, key: string) {
    switch (typeof o) {
      case 'string':
        return <View className='at-article__h3'>{key}: {o}</View>
      case 'object':
        return <View className='at-article__section'>
          <View className='at-article__h3'>{key}</View>
          {
            this.renderObject(o)
          }
        </View>
      default:
        return null
    }
  }
}
