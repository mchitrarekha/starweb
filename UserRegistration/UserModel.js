let mongoose = require('mongoose');

var  UserSchema = new mongoose.Schema({
    //_userID : mongoose.SchemaTypes.objectId,
    name: {type :String, required: true},
    email: {type :String, required: true},
    address: {type :String}

})
var UserSchemaModel = mongoose.model('UserSchemaModel', UserSchema, UserSchemaModel);

//export.model = UserSchemaModel