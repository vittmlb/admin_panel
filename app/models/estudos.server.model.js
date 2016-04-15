/**
 * Created by Vittorio on 14/04/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var EstudoSchema = new Schema({
    nomeEstudo: {
        type: String,
        default: '',
        trim: true
    },
    total: {
        type: Currency,
        default: 0,
        get: function (value) {
            return value / 100;
        }
    }
});

EstudoSchema.set('toJSON', {
    getters: true,
    virtuals: true
});


mongoose.model('Estudo', EstudoSchema);