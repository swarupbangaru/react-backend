var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
/*router.get('/:in',function(req,res,next){
  if(req.params.in==='one')
    res.render('one',{data:''});
  else
    res.json({status:'invalid input url',id:'fail'});
});
router.post('/one',function(req,res,next){
  res.render('one',{data:req.body.name});
});*/
router.get("/createzone",function(req,res,next){
    res.render("createzone",null);

});
router.get('/createcomment',function(req,res,next){
    res.render("createcomment",null);
});
module.exports = router;
