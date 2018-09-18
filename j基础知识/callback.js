//回调函数在nodejs中的作用是非常大的,因为回调使得node拥有了强大的异步处理能力
//但不能说使用了回调后程序就异步化了。


//  规范 一般回调是在函数的参数的最后

// 堵塞方式 过程方式处理
let  fs = require("fs");
let data = fs.readFileSync("data/input.txt")
console.log(data.toString());
let data2 = fs.readFileSync("data/input2.txt")
console.log(data2.toString())
let data3 = fs.readFileSync("data/input3.txt")
console.log(data3.toString())

console.log("同步程序执行结束!");


// 非堵塞
console.log("堵塞程序开始执行!");
let fs2 = require("fs")
fs2.readFile('data/input.txt',(err,data)=>{
    if (err) return console.error(err);
    console.log(data.toString());
})
console.log("堵塞程序执行结束!");