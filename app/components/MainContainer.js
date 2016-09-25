'use strict'

import React from 'react'
import Styles from '../styles'

const MainContainer = (props) => {
  return (
    <div className='jumbotron col-sm-12 text-center' style={Styles.transparentBg}>
      {props.children}
    </div>
  )
}

export default MainContainer
