var mongoose=require('mongoose');
var CommentSchema=new mongoose.Schema({
    body:{
        type:String,
        default:''
    },
    time:{
        type:String,
        default:''
    }
});
module.exports=mongoose.model('CommentSchema',CommentSchema);