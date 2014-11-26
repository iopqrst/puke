var index = require('../app/controllers/index');
var user = require('../app/controllers/user');

module.exports = function(app) {
	app.use(function(req, res, next) {

		console.info('-----session user :');
		console.info(req.session.session_of_user);

		var _user = req.session.session_of_user;
		if (_user) {
			app.locals.user = _user;
		}
		next();
	});

	app.get('/', index.index); //welcome

	// user
	app.get('/user/list', [user.validUser, user.validUserRole], user.queryUserList);
	app.post('/user/signin', user.signin); //登录
	app.get('/user/logout', function(req, res) {
		delete req.session.session_of_user;
		delete app.locals.user;
		res.redirect('/');
	}); //登出
	app.post('/user/signup', user.signup); //注册

	app.get('/signin', user.showSignIn);
	app.get('/signup', user.showSignUp);
};