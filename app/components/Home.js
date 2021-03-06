'use strict'

import React from 'react'
import { Link } from 'react-router'
import MainContainer from './MainContainer'

export default React.createClass({
  render () {
    return (
      <div>
        <MainContainer>
          <h1>Github Battle</h1>
          <p className='lead'>Some fancy motto</p>
          <Link to='/playerOne'>
            <button type='button' className='btn btn-lg btn-success'>Get Started</button>
          </Link>
        </MainContainer>
      </div>
    )
  }
})
