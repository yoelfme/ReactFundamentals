'use strict'

import React from 'react'
import Styles from '../styles'

const PropTypes = React.PropTypes

export default React.createClass({
  propTypes: {
    header: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropTypes.func.isRequired
  },
  render () {
    return (
      <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={Styles.transparentBg}>
        <h1>{this.props.header}</h1>
        <div className='col-sm-12'>
          <form onSubmit={this.props.onSubmitUser}>
            <div className='form-group'>
              <input
                className='form-control'
                placeholder='Github username'
                onChange={this.props.onUpdateUser}
                value={this.props.username}
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
