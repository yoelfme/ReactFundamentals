'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Raven from 'raven-js'
import routes from './config/routes'

const sentryKey = '5efb89ff18f54a54ab662b76de8cf6d9'
const sentryApp = '100413'
const sentryURL = `https://${sentryKey}@sentry.io/${sentryApp}`

const _APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
}

window.onerror = () => {
  Raven.showReportDialog()
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch
  }
}).install()

ReactDOM.render(routes, document.getElementById('app'))
