'use strict'

import React from 'react'

const { string } = React.PropTypes

const UserDetailsWrapper = (props) => {
  return (
    <div className='col-sm-6'>
      <p className='lead'>{props.header}</p>
      {props.children}
    </div>
  )
}

UserDetailsWrapper.propTypes = {
  header: string.isRequired
}

export default UserDetailsWrapper
