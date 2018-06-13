/**
 * Created by XHuang14 on 7/13/2017.
 */
var cheerio = require('cheerio');
var http = require('http');
var iconv = require('iconv-lite');


var fs = require('fs');
var buf = new Buffer(1024*1024);

console.log('ready to open file');
var queryUrl = 'http://directory.slb.com/query.cgi?query='

new Promise((resolve,rekect)=> {
  fs.open('user.txt','r+',function(err,fd){
    if (err) {
        return console.error(err);
    }
    console.log("open success and ready to read:");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
       if (err){
          console.log(err);
       }

       if(bytes > 0){
          var array = buf.slice(0,bytes).toString('utf8').split('\n');
          console.log(array);
          var new_array = array.filter(arr=> {
            return arr!=='';
          })
          resolve(new_array);
       }

       fs.close(fd, function(err){
          if (err){
             console.log(err);
          }
          console.log("close file success");
       });
    });
  })
}).then((array)=>{
  // console.log(array);
  return Promise.all(
    array.map((arr)=>{
      return new Promise((resolve,reject)=>{
        // console.log(queryUrl+arr);
        http.get(queryUrl+arr, function(sres) {
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
            var obj = $('.TheContent>table tr[valign="top"]>th');
            if(obj.length!==0){
              obj.each(function (index, element) {
                  var $element = $(element);
                  if($element.text()=='Direct Manager'){
                    resolve(arr+':'+$element.next().children().text());
                  }
              });
            }else {
              resolve(arr+':not a exact name');
            }
        });
      });
      })
    })
  )
}).then((values)=> {
  var str = '';
  values.forEach((v)=>{
    str+=v+'\n';
  })
  fs.writeFile('outPut.txt',str,  function(err) {
   if (err) {
       return console.error(err);
   }
});
});
