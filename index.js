'use strict'

module.exports = {
  rules: {
    'async-random-bytes': {
      create: function(context) {
        return {
          'CallExpression': function(node) {
            let callee = node.callee
            if (callee.object &&
                callee.object.name === 'crypto' &&
                callee.property &&
                callee.property.name === 'randomBytes' &&
                node.arguments.length === 1) {
              context.report({
                node: node,
                message: 'Pass a callback to crypto.randomBytes()'
              })
            }
          }
        }
      }
    }
  }
}
