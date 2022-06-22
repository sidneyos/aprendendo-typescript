
enum trabalho {
    Medico,
    atriz,
    gerente
}

type Humano = {
    nome: string,
    idade: number,
    profissao: trabalho
}
let pessoa1: Humano = {
    nome: "maria",
    idade: 29,
    profissao: trabalho.atriz
}

let pessoa2: Humano = {
    nome: "roberto",
    idade: 19,
    profissao: trabalho.Medico

}

let pessoa3: Humano = {
    nome: "laura",
    idade: 32,
    profissao: trabalho.atriz
}

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: trabalho.gerente
}