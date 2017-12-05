var express=require('express');
var router=express.Router();
var ZoneController=require('../controllers/ZoneController');
var CommentController=require('../controllers/CommentController')
var controllers = require("../controllers");
router.get('/', function(req, res, next) {
    res.send('welcome to api calls');
});
router.get('/:resource',function (req,res,next) {
    var resourceFrom = req.params.resource;
    var controller = controllers[resourceFrom];
   console.log("controller is:"+controller)
    if (controller == null) {
        res.json({ confirmation: 'fail',
            message: 'User made invalid resource request'
        });
        return;
    }

    // call the correct controller specified by the http request
    controller.find(req.query, function(err, results){
        if (err){
            res.json({ confirmation: 'fail',
                message: err
            });
            return;
        }
        res.json({ confirmation: 'success',
            message: results
        });
    });

});
router.get('/:resource/:id',function (req,res,next) {
    var resource = req.params.resource;

    var id = req.params.id;
    var controller = controllers[resource];

    if (controller == null) {
        res.json({ confirmation: 'fail',
            message: 'User made invalid resource request'
        });
        return;
    }

    // call the correct controller specified by the http request
    controller.findById(id, function(err, result){
        if (err){
            res.json({ confirmation: 'fail',
                message: 'Not found'
            });
            return;
        }

        res.json({ confirmation: 'success',
            message: result
        });

    });
});
router.post('/:resource',function(req,res,next){
    var resource = req.params.resource;

    var controller = controllers[resource];

    if (controller == null) {
        res.json({ confirmation: 'fail',
            message: 'Invalid resource request on POST to: ' + resource
        });
        return;
    }

    controller.create(req.body, function(err, result) {
        if (err){
            res.json({ confirmation: 'fail',
                message: err
            });
            console.log(err);
            return;
        }

        res.json({ confirmation: 'success',
            message: result
        });

    });
});
router.put('/:resource/:id',function (req,res,next) {
    var id=req.params.id;
    if(req.params.resource=='zone'){
        var Zone={
            name:'bicycle'
        };
        ZoneController.update(id,Zone,{},function (err,result) {
            if(err)
                res.json({status:'unable to udpate'});
            else{
                res.json({status:'updated'})
            }
        })

    }else
        res.json({status:'not a zone update'});

})
router.delete('/:resource/:id',function (req,res,next) {
    var id=req.params.id;
    if(req.params.resource=='zone'){
        ZoneController.delete(id,function(err){
            if(err)
                res.json({status:'fail delete'})
            else
                res.json({status:'delted'});
        });
    }else
    {
        res.json({status:'not a zone delter'})
    }

})
module.exports=router;