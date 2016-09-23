'use strict'

import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount () {
    const query = this.props.location.query

    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(players => {
        this.setState({
          isLoading: false,
          playersInfo: players.slice(0, 2)
        })
      })
  },
  handleInitiateBattle () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render () {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo} />
    )
  }
})

export default ConfirmBattleContainer
