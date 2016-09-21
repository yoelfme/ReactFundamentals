'use strict'

import React from 'react'

export default React.createClass({
  render () {
    return (
      <div clasName='main-container'>
        {this.props.children}
      </div>
    )
  }
})
