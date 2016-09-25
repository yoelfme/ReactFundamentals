'use strict'

import Raven from 'raven-js'

const logCustomMessage = (message, context) => {
  Raven.captureMessage(message, {
    level: 'error',
    extra: context
  })

  console.error(message)
}

export default logCustomMessage
