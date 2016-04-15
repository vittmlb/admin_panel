/**
 * Created by Vittorio on 13/04/2016.
 */

var config = require('./config');
var mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);

    mongoose.connection.on('connected', function () {
        console.log(`Mongoose connected at ${config.db}`);
    });
    
    mongoose.connection.on('error', function () {
        console.log(`Mongoose connection error: ${err}`);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose disconnected');
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Mongoose disconnected through app termination');
            process.exit(0);
        });
    });

    require('../app/models/produtos.server.model');
    require('../app/models/estudos.server.model');
    
    return db;
};

