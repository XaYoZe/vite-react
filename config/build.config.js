// const path = require('path');
module.exports = () => {
  return {
    build: {
      target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify("production")
    }
  }
}