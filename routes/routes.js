

const routes = (app) => {
    // app.use(cors());

    app.get('/', function (req, res) {
        res.send('Hello World!');
    });

    app.use('/home', require('./home'))
}
module.exports = routes;