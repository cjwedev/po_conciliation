var config = module.exports;

if (process.env.NODE_ENV == 'local') {
  config.express = {
    port_num: 3000
  };

  config.mailer = {
    host: '',
    port: 25,
    auth: {
      user: '',
      pass: ''
    }
  };
} else {
  config.express = {
    port_num: 3000
  };

  config.mailer = {
    host: '',
    port: 25,
    auth: {
      user: '',
      pass: ''
    }
  };
}
