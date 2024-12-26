function num1() {
    return 10
}
function num2(cancelIdleCallback) {
    return cancelIdleCallback() - 1
}
console.log(num2(num1))