module.exports = (app) => {
    app.use('/', require('./home'));
    app.use('/auth', require('./auth'));
    app.use('/profile', require('./profile'));
    app.use('/developers', require('./developers'));

};