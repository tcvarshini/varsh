var mongoose = require('mongoose');
//Defining Schema
var retailSchema = mongoose.Schema({


    name: {
        type: String,
        required: true
    },

    id: {
        type: String,
        required: true
    },

    cost: {
        type: String,
        required: true
    },
    pub: {
        type: String,
        required: true
    },

    
});

var retail = module.exports = mongoose.model('retailcollection', retailSchema); //Binding schema 

module.exports.addRetail = function(data, callback) {
    retail.create(data, callback);
}
module.exports.getRetailByField = function(ret, callback) {
    retail.find({name:ret}, callback);
}
module.exports.updateRetail = function(name, data, options, callback) {
    var query = {
        name: name
    };
    var update = {
        name: data.name,
        id: data.id,
        cost: data.cost,
        pub: data.pub,
       
    }
    retail.findOneAndUpdate(query, update, options, callback);
}
module.exports.removeRetail = function (name, callback) {
    var query = {
        name: name
    };
    retail.remove(query, callback);
}
module.exports.getDetails = function(callback) {
    retail.find(callback);
}

