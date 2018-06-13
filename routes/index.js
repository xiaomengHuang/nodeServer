var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    res.send('hello index');
});

router.get('/a/getvalue',function(req,res,next) {
  res.json({value:'aa'});
})
router.get('/a/getchildren',function(req,res,next) {
  res.json(['b','c','d']);
})

router.get('/b/getvalue',function(req,res,next) {
  res.json({value:'bb'});
})
router.get('/b/getchildren',function(req,res,next) {
  res.json(['e','f','g']);
})

router.get('/c/getvalue',function(req,res,next) {
  res.json({value:'cc'});
})
router.get('/c/getchildren',function(req,res,next) {
  res.json(['h']);
})

router.get('/d/getvalue',function(req,res,next) {
  res.json({value:'dd'});
})
router.get('/d/getchildren',function(req,res,next) {
  res.json(['i','j']);
})

router.get('/e/getvalue',function(req,res,next) {
  res.json({value:'ee'});
})
router.get('/e/getchildren',function(req,res,next) {
  res.json([]);
})
router.get('/f/getchildren',function(req,res,next) {
  res.json([]);
})
router.get('/g/getchildren',function(req,res,next) {
  res.json([]);
})
router.get('/h/getchildren',function(req,res,next) {
  res.json([]);
})
router.get('/i/getchildren',function(req,res,next) {
  res.json([]);
})
router.get('/j/getchildren',function(req,res,next) {
  res.json([]);
})
router.get('/f/getvalue',function(req,res,next) {
  res.json({value:'ff'});
})
router.get('/g/getvalue',function(req,res,next) {
  res.json({value:'gg'});
})
router.get('/h/getvalue',function(req,res,next) {
  res.json({value:'hh'});
})
router.get('/i/getvalue',function(req,res,next) {
  res.json({value:'ii'});
})
router.get('/j/getvalue',function(req,res,next) {
  res.json({value:'jj'});
})

const obj = {
  a:{
    value:'a',
    b:{
      value:'b',
      e:{
        value:'e'
      },
      f:{
        value:'f'
      },
      g:{
        value:'g'
      }
    },
    c:{
      value:'c',
      h:{
        value:'h'
      }
    },
    d:{
      value:'d',
      i:{
        value:'i'
      },
      j:{
        value:'j'
      }
    }
  }
}



module.exports = router;
