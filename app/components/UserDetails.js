'use strict'

import React from 'react'

const { number, shape, string } = React.PropTypes

const UserDetails = (user) => {
  return (
    <div>
      {!!user.score && <li className='list-group-item'><h3>Score: {user.score}</h3></li>}
      <li className='list-group-item'> <img src={user.info.avatar_url} className='img-rounded img-responsive'/></li>
      {user.info.name && <li className='list-group-item'>Name: {user.info.name}</li>}
      <li className='list-group-item'>Username: {user.info.login}</li>
      {user.info.location && <li className='list-group-item'>Location: {user.info.location}</li>}
      {user.info.company && <li className='list-group-item'>Company: {user.info.company}</li>}
      <li className='list-group-item'>Followers: {user.info.followers}</li>
      <li className='list-group-item'>Following: {user.info.following}</li>
      <li className='list-group-item'>Public Repos: {user.info.public_repos}</li>
      {user.info.blog && <li className='list-group-item'>Blog: <a href={user.info.blog}> {user.info.blog}</a></li>}
    </div>
  )
}

UserDetails.propTypes = {
  score: number,
  info: shape({
    avatar_url: string.isRequired,
    blog: string,
    company: string,
    followers: number.isRequired,
    following: number.isRequired,
    location: string,
    login: string.isRequired,
    name: string,
    public_repos: number.isRequired
  })
}

export default UserDetails
