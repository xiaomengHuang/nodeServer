var _user = require('../server/model/user');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(_user);
  console.log('here');
  return _user.create({firstName:'test1',lastName:'last1'}).
  then((data)=> {
    console.log(data,'<---------------');
    res.json(data);
  })
});

module.exports = router;
