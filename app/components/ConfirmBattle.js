'use strict'

import React from 'react'

const puke = (object) => {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

const ConfirmBattle = (props) => {
  return props.isLoading === true
    ? <p>Loading...</p>
    : <div>Confirm Battle: {puke(props)}</div>
}

export default ConfirmBattle
