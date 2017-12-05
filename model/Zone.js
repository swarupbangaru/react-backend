var mongoose=require('mongoose');
var ZoneSchema=new mongoose.Schema({
    name:{type:String ,default:''}
});
module.exports=mongoose.model('ZoneSchema',ZoneSchema);