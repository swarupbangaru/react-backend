var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json([{
        id: 1,
        username: "samsepi0l"
    }, {
        id: 2,
        username: "D0loresH4ze"
    }]);

});
router.get('/:in',function(req,res,next){
   if(req.params.in==='swarup')
       res.json({name:'swarup',desg:'developer'});
   else
       res.json({name:'alisa',desg:'homemaker'});
});

module.exports = router;
