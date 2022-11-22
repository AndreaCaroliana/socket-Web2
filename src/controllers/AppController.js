const AppController = {};

AppController.index = (req, res) => {
    res.render('index');
}

module.exports = AppController;