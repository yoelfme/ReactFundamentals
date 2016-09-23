'use strict'

import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    console.log('getInitialState')
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentWillMount () {
    console.log('componentWillMount')
  },
  componentDidMount () {
    const query = this.props.location.query

    // Fetch ifo from github then update state
    console.log('componentDidMount')
  },
  componentWillReceiveProps () {
    console.log('componentWillReceiveProps')
  },
  componentWillUnmount () {
    console.log('componentWillUnmount')
  },
  render () {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
    )
  }
})

export default ConfirmBattleContainer
