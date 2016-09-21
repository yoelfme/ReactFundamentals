'use strict'

import React from 'react'
import Styles from '../styles'

const { string, func } = React.PropTypes

const Prompt = (props) => {
  return (
    <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={Styles.transparentBg}>
      <h1>{props.header}</h1>
      <div className='col-sm-12'>
        <form onSubmit={props.onSubmitUser}>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder='Github username'
              onChange={props.onUpdateUser}
              value={props.username}
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

Prompt.propTypes = {
  header: string.isRequired,
  username: string.isRequired,
  onUpdateUser: func.isRequired,
  onSubmitUser: func.isRequired
}

export default Prompt
