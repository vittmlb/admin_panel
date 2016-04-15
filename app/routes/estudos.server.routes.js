/**
 * Created by Vittorio on 14/04/2016.
 */

var estudos = require('../controllers/estudos.server.controller');

module.exports = function(app) {

    app.route('/api/estudos')
        .get(estudos.list)
        .post(estudos.create);
    
    
};