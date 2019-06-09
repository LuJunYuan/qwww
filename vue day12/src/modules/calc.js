// 负责提供计算方法
// 定义方法：
//  加法
function add(num1, num2) {
    return num1 + num2
}
//  减法
function sub(num1, num2) {
    return num1 - num2
}
// 暴露
export default {
    add: add,
    sub: sub
}