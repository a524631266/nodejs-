console.log("hello world!");
//在命令行中 输入 node helloworld.js

// 引入包模式
let http = require("http")
let url = require("url");
// http://localhost:8888/start?foo=bar&hello=world%aa=1
function start(router){
    http.createServer(
        (request,response) =>{
            // console.log("request.headers",request.headers); 
            console.log(request.method); // GET
            let pathname = url.parse(request.url).pathname
            console.log("pathname :",pathname); // /start
            router(pathname)
            response.writeHead(200,{
                'Content-Type':'text/plain'
            })
            response.write("hello www")
            response.end(
                a()
            );
    
        }
    ).listen(8888);
}


let a = ()=>{//在后台打印记录,并同时返回结果
    console.log("hello world"); 
    return "111"
}
console.log('Server running at http://127.0.0.1:8888/');
// 到处模块
exports.start = start
// （请注意，当我们在服务器访问网页时，我们的服务器可能会输出两次“Request received.”。
// 那是因为大部分浏览器都会在你访问 http://localhost:8888/ 时尝试读取 http://localhost:8888/favicon.ico )