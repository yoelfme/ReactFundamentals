'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

const USER_DATA = {
  name: 'Yoel Monzon',
  username: 'yoelfme',
  image: 'https://avatars3.githubusercontent.com/u/4493680?v=3&s=466'
}

const ProfilePic = React.createClass({
  render () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
})

const ProfileLink = React.createClass({
  render () {
    return (
      <div>
        <a href={`https://www.github.com/${this.props.username}`} target='_blank'>
          {this.props.username}
        </a>
      </div>
    )
  }
})

const ProfileName = React.createClass({
  render () {
    return (
      <div>{this.props.name}</div>
    )
  }
})

const Avatar = React.createClass({
  render () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'))
