
console.log("start.......");
//引入 events 模块
let events = require('events'); 
let event = require("events");
// 创建 eventEmitter 对象
let eventEmitter = new  event.EventEmitter()

// 绑定事件及事件的处理程序
let connectionHander = ()=>{
    console.log("链接成功");
    eventEmitter.emit("data_received")
}
let receivedhandle = () =>{
    console.log("数据接受成功");
}
//这里为了演示方便理解,先数据接受,再创建链接
eventEmitter.on("data_received",receivedhandle)

eventEmitter.on("connection",connectionHander)



eventEmitter.emit("connection")
console.log("over.........");




// Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。

// Node.js 里面的许多对象都会分发事件：一个 net.Server 对象会在每次有新连接时触发一个事件， 
// 一个 fs.readStream 对象会在文件被打开的时候触发一个事件。 
// 所有这些产生事件的对象都是 events.EventEmitter 的实例


// event进阶

let eventEmitter2 = require("events").EventEmitter
let event2 = new eventEmitter2()

let handleclg = (a,b)=>{
    console.log(a,b);
}
// 一次性的
event2.once("clg",handleclg)
console.log(event2.listenerCount("clg")); //1
event2.emit("clg","aa","bb","cc")
console.log(event2.listenerCount("clg")); //0

event2.on("clg",handleclg)
console.log(event2.listenerCount("clg")); //1
event2.emit("clg","aa","bb","cc")
console.log(event2.listenerCount("clg")); //1
