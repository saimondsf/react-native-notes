//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: '5',
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

/*let nomereal = pessoa.endereco.logradouro
console.log(nomereal)*/

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, numero } } = pessoa
consoconsole.log(ag, numero)