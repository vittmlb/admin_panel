/**
 * Created by Vittorio on 14/04/2016.
 */

var Estudos = require('mongoose').model('Estudo');

exports.create = function(req, res) {
    var estudo = new Estudos(req.body);
    estudo.save(function (err) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            res.json(estudo);
        }
    });
};

exports.list = function(req, res) {
    Estudos.find().exec(function (err, estudos) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            res.json(estudos);
        }
    });
};