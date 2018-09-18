console.log("hello world!");
//在命令行中 输入 node helloworld.js

// 引入包模式
let http = require("http")
http.createServer(
    (request,response) =>{
        response.writeHead(200,{
            'Content-Type':'text/plain'
        })
        response.write("hello www")
        response.end(
            a()
        )
    }
).listen(8888);

let a = ()=>{//在后台打印记录,并同时返回结果
    console.log("hello world"); 
    return "111"
}
console.log('Server running at http://127.0.0.1:8888/');