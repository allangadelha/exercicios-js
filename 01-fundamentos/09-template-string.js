const nome  = 'Lucca'

const concatenacao = 'Olá ' + nome + '!'
console.log(concatenacao)

const template = `Olá ${nome}!`
console.log(template)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)