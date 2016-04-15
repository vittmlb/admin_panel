/**
 * Created by Vittorio on 13/04/2016.
 */

var Produtos = require('mongoose').model('Produto');

exports.create = function(req, res) {
    var produto = new Produtos(req.body);
    produto.save(function (err) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            res.json(produto);
        }
    });
};

exports.list = function(req, res) {
    Produtos.find().sort('-created').exec(function (err, produtos) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            res.json(produtos);
        }
    });
};