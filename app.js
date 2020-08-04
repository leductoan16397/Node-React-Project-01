const express = require('express');
const routes = require('./routes/routes');
const session = require('express-session');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const favicon = require('serve-favicon');

const app = express();

app.use(cors());

// mongoose.promise = global.Promise;
// // local database
// mongoose.connect("mongodb://localhost:27017/East", { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
//     if (err) throw err;
//     console.log('Successfully connected');
//     var admin = mongoose.connection.db.admin();
//     admin.serverStatus(function (err, info) {
//         if (err) return cb(err);
//         var version = info.version
//         console.log(`Mongo Version ${version}`);
//     });
// });
// mongoose.set('debug', true);

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});


app.use(session({ secret: 'East', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use('/static', express.static(path.join(__dirname, 'public')));
// init routes
routes(app);


// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    res.status(404).json({
        errors: {
            message: err.message,
            error: {},
        },
    });
});


module.exports = app;