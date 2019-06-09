// ES
import calc from './modules/calc.js'
// 引入样式文件
import './assets/index.css'

// 处理当前页面的逻辑
var i1 = document.querySelector('#i1')
var i2 = document.querySelector('#i2')
var i3 = document.querySelector('#i3')
var sel = document.querySelector('#sel')
var btn = document.querySelector('#btn')


btn.onclick = function () {
    // 得到输入框的内容
    var val1 = i1.value
    var val2 = i2.value
    // 得到运算符号
    var pro = sel.value
    console.log(val1, val2, pro)
    // 判断
    switch (pro) {
        case "0":
            // 加法'
            i3.value = calc.add(+val1, +val2)
            break;
        case "1":
            // 减法
            i3.value = calc.sub(+val1, +val2)
            break;
        default: 
            break;
    }
}