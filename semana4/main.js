

class Pessoa{
    constructor(nome, sobrenome, email, data_nascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.data_nascimento = data_nascimento;
        this.nomeCompleto = this.nomeCompleto()
    }

    nomeCompleto(){
        return this.nome + " " + this.sobrenome
    }
    
}

class Professor extends Pessoa{
    constructor(nome, sobrenome, email, data_nascimento, area_atuacao, link_latters) {
        super(nome, sobrenome, email, data_nascimento);
        this.area_atuacao = area_atuacao;
        this.link_latters = link_latters
    }
}

class Aluno extends Pessoa{
    constructor(nome, sobrenome, email, data_nascimento, curso) {
        super(nome, sobrenome, email, data_nascimento);
        this.curso = curso;
    }
}




// let pessoa1 = new Aluno("João", "Rodrigues", "joaorodrigues3009@outlook.com", "30/09/2003", "Ciências da Computação")
// let pessoa = new Pessoa("Selma", "Rodrigues", "selmarodrigues3009@outlook.com", "24/07/1998", "Psicologia")
// console.log(`Nome: ${pessoa.nomeCompleto}\nEmail: ${pessoa.email}\nData Nascimento: ${pessoa.data_nascimento}\n`)
// console.log(`\n`)
// console.log(`Nome: ${pessoa1.nomeCompleto}\nEmail: ${pessoa1.email}\nData Nascimento: ${pessoa1.data_nascimento}\nCurso: ${pessoa1.curso}`)