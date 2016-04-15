/**
 * Created by Vittorio on 13/04/2016.
 */

var config = require('./config');
var express = require('express');
var cors = require('cors');
var flash = require('connect-flash');
var methodOverride = require('method-override');
var path = require('path');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var session = require('express-session');
var handlebars = require('express-handlebars').create({layoutsDir: path.join(__dirname, '../app/views/layouts'), defaultLayout: 'main'});

module.exports = function() {
    
    var app = express();
    
    if(process.env.NODE_env === 'development') {
        app.use(morgan('dev'));
    } else if(process.env.NODE_env === 'production') {
        app.use(compress());
    }

    app.use(cors());
    app.use(flash());
    app.use(methodOverride());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    // app.engine('handlebars', handlebars.engine);
    // app.set('views', path.join(__dirname, '../app/views'));
    // app.set('view engine', 'handlebars');

    app.use(express.static('./public'));

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/index.html'));
    });

    require('../app/routes/produtos.server.routes')(app);
    require('../app/routes/estudos.server.routes')(app);


    
    return app;
    
};