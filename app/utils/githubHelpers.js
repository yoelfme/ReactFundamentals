'use strict'

import axios from 'axios'
import logCustomMessage from './logCustomMessage'

const id = 'YOUR_CLIENT_ID'
const secret = 'YOUR_SECRET_ID'
const params = `?client_id=${id}&client_secret=${secret}`

const getUserInfo = (username) => {
  return axios.get(`https://api.github.com/users/${username}${params}`)
}

const getRepos = (username) => {
  return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
}

const getTotalStarts = (repos) => {
  return repos.data.reduce((prev, current) => {
    return prev + current.stargazers_count
  }, 0)
}

const getPlayersData = (player) => {
  return getRepos(player.login)
    .then(getTotalStarts)
    .then(totalStars => ({ followers: player.followers, totalStars }))
}

const calculateScores = (players) => {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

const helpers = {
  getPlayersInfo (players) {
    return axios.all(players.map(username => {
      return getUserInfo(username)
    })).then(info => {
      return info.map(user => {
        return user.data
      })
    }).catch(error => {
      logCustomMessage(error.response.statusText, {
        players,
        error
      })
    })
  },
  battle: (players) => {
    const playerOneData = getPlayersData(players[0])
    const playerTwoData = getPlayersData(players[1])

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(error => {
        logCustomMessage(error.response.statusText, {
          players,
          error
        })
      })
  }
}

export default helpers
