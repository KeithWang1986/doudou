'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./public/src/index.jsx');
} else {
  module.exports = require('./public/src/index.jsx');
}