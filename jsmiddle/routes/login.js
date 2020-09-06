var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    if(req.body.username === req.body.password) {
        res.json({token:req.body.username});
    } else {
        res.send({token:''});
    }
  
});

module.exports = router;
