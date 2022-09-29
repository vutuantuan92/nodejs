class NewsController {
    // [GET] /news
    index(req, res) {
        console.log(req.body);
        res.render('news');
    }
    // [GET] /show
    show(req, res) {
        res.send('new detail');
    }
}

module.exports = new NewsController();
