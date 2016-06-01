'use strict';

module.exports.handler = function(event, context, cb) {
  return cb(null, {
    message: 'This is supposed to add n numbers!'
  });
};
