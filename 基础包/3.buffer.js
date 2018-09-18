// JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

// 但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，
// 定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

// 在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。
// Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据
// 1 . 每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库
// 2 . 原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。



// Buffer 与字符编码
//  Buffer 实例一般用于表示编码字符的序列，
//      UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。 
//  通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。
let buffer = Buffer.from("myfirst",'ascii')
console.log("hex :",buffer.toString("hex"));
console.log('base64 :', buffer.toString("base64"));
console.log('ascii :', buffer.toString("ascii"));
console.log('ascii :', buffer.toString("utf-8"));



// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10)
console.log('buf1 :',buf1 );//<Buffer 00 00 00 00 00 00 00 00 00 00>
console.log('buf1 :',buf1.length); //10
console.log('buf1 :',buf1.toString("hex")); //10