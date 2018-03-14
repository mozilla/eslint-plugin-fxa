/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict'

module.exports = {
  extends: 'plugin:fxa/default',

  env: {
    amd: true, // defines require() and define() as global variables as per the amd spec
    browser: true, // browser global variables
    mocha: true // adds all of the Mocha testing global variables
  },

  rules: {
    'node/no-unsupported-features': ['error', {ignores: ['modules']}],

    'camelcase': 'error',
    'id-blacklist': ['error', 'self'],
    'strict': ['error', 'function']
  }
}
