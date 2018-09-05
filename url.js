var http = require("http");
var url = require("url");
var path = require("path");
console.log(path);
http.createServer((req,res)=>{
    //url.parse()
    //pathname   /后面的
    //query      ?后面的
    //query时如果第二个参数传为true，会转化为一个对象
    //http://localhost:3000/red?username=tom&age=20
    var pathname = url.parse(req.url).pathname
    console.log(pathname);
    var query = url.parse(req.url,true).query
    var age = query.age
    console.log(query);
    console.log(age);
    res.end("结束")
}).listen(3000,"127.0.0.1")
console.log("服务器已在端口3000运行")