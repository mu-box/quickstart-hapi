var Hapi = require('hapi');

var app = new Hapi.Server();

// view engine setup
app.register(require('vision'), function (err) {
  if (err) {
    throw err;
  }

  app.views({
    engines: {
      jade: require('jade')
    },
    path: __dirname + '/views',
    compileOptions: {
      pretty: true
    }
  });
});

const loggerOptions = {
  ops: {
    interval: 5000
  },
  reporters: {
    myConsoleReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{
        log: '*',
        response: '*'
      }]
    }, {
      module: 'good-console'
    }, 'stdout']
  }
};

// Register Logger
app.register({
  register: require('good'),
  loggerOptions,
}, function (err) {
  if (err) {
    throw err;
  }
});

// Register static file serving
app.register(require('inert'), function (err) {
  if (err) {
    throw err;
  }

  app.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  });
});

module.exports = app;