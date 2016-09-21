'use strict'

import React from 'react'
import Styles from '../styles'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      username: ''
    }
  },
  onUpdateUser (e) {
    this.setState({
      username: e.target.value
    })
  },
  onSubmitUser (e) {
    e.preventDefault()
    this.setState({
      username: ''
    })
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battler',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push(`/playerTwo/${this.state.username}`)
    }
  },
  render () {
    return (
      <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={Styles.transparentBg}>
        <h1>{this.props.route.header}</h1>
        <div className='col-sm-12'>
          <form onSubmit={this.onSubmitUser}>
            <div className='form-group'>
              <input
                className='form-control'
                placeholder='Github username'
                onChange={this.onUpdateUser}
                value={this.state.username}
                type='text'/>
            </div>
            <div className='form-group col-sm-4 col-sm-offset-4'>
              <button
                className='btn btn-block btn-success'
                type='submit'>
                  Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
})
