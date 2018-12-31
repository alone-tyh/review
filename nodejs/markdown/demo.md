# h1字体
## h2字体
### h3字体
#### h4字体
##### h5字体
###### h6字体

*斜体*

_这也是斜体_

**变粗**

__也是变粗__

* 无序列
* 无序列
    * 无序列
    * 无序列
        * 无序列
        * 无序列

### 有序列表
1. 11111
2. 22222
3. 33333
4. 44444
## 图片
<!-- ![car](./001.jpg) -->
<img src="./001.jpg" width='423'>

## Link
[百度](http://baidu.com)

## 引言

名人名句

> Stay hungry,Stay foolish

> 求知若渴，虚心若愚

## inline code 内联代码

通过使用`npm install` 去安装`package.json`中的包

## 代码块
一个简单的node http模块例子
```javascript
var http=require('http')
var server=http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"})
    res.end()
})
server.listen(8080)
```
```html
<div class="div"></div>
```