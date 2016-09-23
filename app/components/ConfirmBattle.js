'use strict'

import React from 'react'

const ConfirmBattle = (props) => {
  return props.isLoading === true
    ? <p>Loading...</p>
    : <p>Confirm Battle</p>
}

export default ConfirmBattle
