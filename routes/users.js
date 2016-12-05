exports.register = function (app, options, next) {

  app.route({
    method: 'GET',
    path: '/users',
    handler: function (request, response) {
      response('respond with a resource');
    }
  });

  return next();

};

exports.register.attributes = {
  name: 'users',
};