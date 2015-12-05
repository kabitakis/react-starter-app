var _ = require('lodash');

var config = {
  default: {
    language: 'en',
    params: {
      msg: 'Ahoy!'
    }
  },
  local: {
    mode: 'local',
    port: 3003,
    memcached_host: "127.0.0.1:11211",
    deployType:'development'
  },
  staging: {
    mode: 'staging',
    port: 3003,
    memcached_host: "127.0.0.1:11211",
    deployType:'staging'
  },
  production: {
    mode: 'production',
    port: 3003,
    memcached_host: "127.0.0.1:11211",
    deployType:'production'
  }
}

module.exports = function(mode) {
  console.log("CONFIG MODE:", mode || process.env.NODE_ENV || 'local');
  return _.extend(config[mode || process.env.NODE_ENV || 'local'], config.default);
}();
