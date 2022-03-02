console.log(soma(3, 4)) // posso chamar ela antes

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) // sou obrigado chamar ela depois da declaração

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(sub(3, 4)) // também sou obrigado chamar ela depois da declaração