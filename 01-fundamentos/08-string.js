const escola = "Cod3r"

console.log(escola)
console.log(escola.charAt(4)) // última posição da string
console.log(escola.charAt(5)) // vazio (posição não existe)

console.log(escola.charCodeAt(3)) // valor na tabela unicode

console.log(escola.indexOf(3)) // retorna o valor da posição informada

console.log(escola.substring(1)) // retorna o valor a partir da posição informada

console.log(escola.substring(0, 3)) // retorna o valor a partir da posição inicial informada até a quantidade de posição informada (no segundo parâmetro)

console.log('Escola '.concat(escola).concat("!")) // função de concatenação
console.log('Escola ' + escola + "!") // função de concatenação (outra forma usando o sinal de +)

console.log(escola.replace(3, 'e')) // substitui o valor do primeiro parâmetro pelo valor informado no segundo parâmetro

console.log(escola.replace(/\w/g, 'e')) // regex

console.log('Ana,Maria,Pedro'.split(',')) // transforma string em array a partir do separador


