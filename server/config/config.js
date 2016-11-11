const path = require('path');

module.exports = {
  test: {
    port: process.env.PORT || 3001,
  },
  developement: {
    port: process.env.PORT || 7000,
  },
  production: {
    port: process.env.PORT || 80,
  }
}
