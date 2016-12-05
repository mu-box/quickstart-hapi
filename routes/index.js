exports.register = function (app, options, next) {

  app.route({
    method: 'GET',
    path: '/',
    handler: function (request, response) {
      response.view('index', {
        title: 'Hapi'
      });
    }
  });

  return next();

};

exports.register.attributes = {
  name: 'index',
};