var http = require("http");
var url = require("url");
http.createServer((req,res)=>{
    //var pathname = url.parse(req.url).pathname
    //var query = url.parse(req.url,true).query
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    if(/^\/student\/[\d]{4}$/.test(req.url)){
        var reg = /\/student\/([\d]{4})/;
        var xuehao = reg.exec(req.url)[1];
        res.end("<h1>这事一个学生，学号为："+xuehao+"</h1>")
    }else if(/^\/teacher\/[\d]{4}$/.test(req.url)){
        var reg = /\/teacher\/([\d]{4})/;
        var id = reg.exec(req.url)[1];
        res.end("<h1>这是一个老师，id号为："+id+"</h1>")
    } else{
        res.end("对不起，页面不存在");
    }
}).listen(3000);
console.log("服务器已经在端口3000运行");