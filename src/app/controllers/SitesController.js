class SitesController {
    // [GET] /news
    index(req, res) {
        //console.log(req.body);
        res.render('home');
    }
    // [GET] /show
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController();
