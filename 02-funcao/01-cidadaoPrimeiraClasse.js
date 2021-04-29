// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar função de forma literal
function func1() {}

// armazenar função em uma variável
const func2 = function () {}

// armazenar função em um array
const array = [function(a, b) { return a + b }, func1, func2]
console.log(array[0](2, 3))

// armazenar função em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// passar função como parmâmetro
function run(func) {
    func()
}
run(function () { console.log('Executando...')})

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)
