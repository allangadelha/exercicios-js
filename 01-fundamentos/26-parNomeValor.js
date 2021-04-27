// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares/valor
const cliente = {
    nome: 'Allan',
    idade: 40,
    peso: 85,
    endereco: {
        logradouro: 'Rua 2 do condomínio',
        numero: 12
    }
}

console.log(saudacao)
console.log(exec(0))
console.log(cliente)