/**
 * Created by XHuang14 on 7/13/2017.
 */
var cheerio = require('cheerio');
var http = require('http');
var iconv = require('iconv-lite');

var url = 'http://bj.58.com/chuzu/';

getItems()

function getItems() {
  var names = [];
  var time = 0;
  for(var i=1;i<13;i++) {
    setTimeout(()=>{
      http.get(url+'pn'+i+'/', function(sres) {
      var chunks = [];
      sres.on('data', function(chunk) {
          chunks.push(chunk);
      });

      sres.on('error', function(){
          console.log('error found');
      });

      sres.on('close', function(){
          console.log('connect closed');
      });

      sres.on('end', function() {
          var html = iconv.decode(Buffer.concat(chunks), 'utf-8');
          var $ = cheerio.load(html, {decodeEntities: false});
          $('.jjr_par_dp').each(function (index, element) {
              // console.log(index,element,'----<');
              var $element = $(element);
              // console.log($element.attr('href'));
              names.push($element.text());
          });
          time += 1;
          time === 12 && doFilter(names);
      });
    });
    },1000);
  }
}

function doFilter(names) {
  var _names = names.map((name)=> {
    return name.replace(/\s+/g,"").split('-', 1)[0].split('(', 1)[0];
  });
  console.log(_names,_names.length);
  let finalNames = [];
  _names.forEach((name,index)=> {
    if(index === 0 || containers(finalNames,name)) {
      finalNames.push(name);
    }
  })
  console.log(finalNames,finalNames.length);
  console.log(new Set(_names));
}

function containers(list,item) {
  var len = list.length;
  var flag = true;
  for(var i=0;i<len;i++) {
    if(list[i] == item){
      flag = false;
    }
  }
  return flag;
}
// function removeSameitem(names) {
//
// }
