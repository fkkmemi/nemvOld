var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* GET sign listing. */
router.get('/sign', function(req, res, next) {
    res.send({status:'OK',msg:'name : jjj'});
});

module.exports = router;
