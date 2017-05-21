
var config = require('../config'),
  async = require('async'),
  mailer = require('../mailer/models');

/**
 * Send email
 */
exports.send = function(req, res) {
  console.log(req.body);
}
