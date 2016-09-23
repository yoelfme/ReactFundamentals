'use strict'

import React from 'react'

const { bool, array } = React.PropTypes

const puke = (object) => {
  return <pre>{JSON.stringify(object, 2, ' ')}</pre>
}

const Results = (props) => {
  return (
    <div>Results: {puke(props)}</div>
  )
}

Results.propTypes = {
  isLoading: bool.isRequired,
  playersInfo: array.isRequired,
  scores: array.isRequired
}

export default Results
