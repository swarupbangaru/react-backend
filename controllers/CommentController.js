var Comment=require('../model/Comment')
module.exports={
    find:function(params,callback){
        Comment.find(params,function(err,comments){
            if(err)
            {
                callback(err,null);
                return;
            }
            callback(null,comments);
        });

    },
    findById:function(id,callback){
        Comment.findById(id,function(err,comments){
            if(err){
                callback(err,null);
                return;
            }
            callback(null,comments);
        })
    },
    update:function (id,comment,callback) {
        Comment.findByIdAndUpdate(id,comment,{new:true},function (err,comment) {
            if(err){
                callback(err,null);
                return;
            }
            callback(null,comment);

        })

    },
    create:function (comment,callback) {
        Comment.create(comment,function (err,comment) {
            if(err){
                callback(err,null);
                return
            }
            callback(null,comment);

        })

    },
    delete:function (id,callback) {
        Comment.findByIdAndRemove(id,function(err){
            if(err){
                callback(err,null);
                return;
            }
            callback(null,null);
        })

    }
}