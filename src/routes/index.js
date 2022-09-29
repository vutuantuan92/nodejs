const newsRouter = require('./news'); //Khởi tạo Path từ news.js.
const sitesRouter = require('./site');

function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.use('/news', newsRouter);
    app.use('/', sitesRouter);
}

module.exports = route;
