
class Pessoa {
    constructor(nome, sobrenome, email, data_nascimento, telefoneFixo, telefoneCelular) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.data_nascimento = data_nascimento;
        this.telefoneFixo = telefoneFixo;
        this.telefoneCelular = telefoneCelular;
    }
}

class Professor extends Pessoa {
    constructor(nome, sobrenome, email, data_nascimento, telefoneFixo, telefoneCelular, area_atuacao, link_latters, matricula) {
        super(nome, sobrenome, email, data_nascimento, telefoneFixo, telefoneCelular);
        this.area_atuacao = area_atuacao;
        this.link_latters = link_latters;
        this.matricula = matricula;
    }
}

class Aluno extends Pessoa {
    constructor(nome, sobrenome, email, data_nascimento, telefoneFixo, telefoneCelular, curso, matricula) {
        super(nome, sobrenome, email, data_nascimento, telefoneFixo, telefoneCelular);
        this.curso = curso;
        this.matricula = matricula;
    }
}



function exibirCampos() {
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const camposProfessor = document.getElementById('campos-professor');
    const camposAluno = document.getElementById('campos-aluno');

    if (tipo === 'professor') {
        camposProfessor.style.display = 'block';
        camposAluno.style.display = 'none';
    } else if (tipo === 'aluno') {
        camposProfessor.style.display = 'none';
        camposAluno.style.display = 'block';
    }

}


function validarNome() {
    const nome = document.getElementById('nome').value;
    const erroNome = document.getElementById('erro-nome');
    const nomePattern = /^([A-Z][a-z]+)\s([A-Z][a-z]+(?:\s[A-Z][a-z]+)*)$/;

    if (!nomePattern.test(nome)) {
        erroNome.textContent = "Nome deve ser no formato: 'Xxxxx Xxxxx'";
        return false;
    } else {
        erroNome.textContent = "";
        return true;
    }
}

function validarEmail() {
    const email = document.getElementById('email').value;
    const erroEmail = document.getElementById('erro-email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        erroEmail.textContent = "Email inválido";
        return false;
    } else {
        erroEmail.textContent = "";
        return true;
    }
}

function validarDataNascimento() {
    const dataNascimento = document.getElementById('data_nascimento').value;
    const erroDataNascimento = document.getElementById('erro-data-nascimento');
    const dataPattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!dataPattern.test(dataNascimento)) {
        erroDataNascimento.textContent = "Data deve ser no formato dd/mm/aaaa";
        return false;
    } else {
        erroDataNascimento.textContent = "";
        return true;
    }
}


function validarTelefone(id) {
    const telefone = document.getElementById(id).value;
    const erroTelefone = document.getElementById('erro-' + id);
    const telefonePattern = /^\(\d{2}\)\d{4,5}-\d{4}$/;

    if (!telefonePattern.test(telefone)) {
        erroTelefone.textContent = "Telefone deve ser no formato (99)99999-9999";
        return false;
    } else {
        erroTelefone.textContent = "";
        return true;
    }
}

function validarCampoObrigatorio(id) {
    const campo = document.getElementById(id).value;
    const erroCampo = document.getElementById('erro-' + id);

    if (campo.trim() === "") {
        erroCampo.textContent = "Este campo é obrigatório";
        return false;
    } else {
        erroCampo.textContent = "";
        return true;
    }
}

function validarMatricula(tipo) {
    const matriculaId = tipo === 'professor' ? 'matricula-professor' : 'matricula-aluno';
    const matricula = document.getElementById(matriculaId).value;
    const erroMatricula = document.getElementById('erro-' + matriculaId);

    const matriculaPattern = tipo === 'professor' ? /^\d{5}$/ : /^\d{10}$/;

    if (!matriculaPattern.test(matricula)) {
        erroMatricula.textContent = `Matrícula deve ter ${tipo === 'professor' ? 5 : 10} dígitos`;
        return false;
    } else {
        erroMatricula.textContent = "";
        return true;
    }
}
function validarFormulario() {
    let valido = true;
    valido &= validarNome();
    valido &= validarEmail();
    valido &= validarDataNascimento();
    valido &= validarTelefone('telefone_fixo');
    valido &= validarTelefone('telefone_celular');

    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    if (tipo === 'professor') {
        valido &= validarCampoObrigatorio('area');
        valido &= validarCampoObrigatorio('lattes');
        valido &= validarMatricula('professor');
    } else if (tipo === 'aluno') {
        valido &= validarCampoObrigatorio('curso');
        valido &= validarMatricula('aluno');
    }
    if (Boolean(valido)) {
        const nomeCompleto = document.getElementById('nome').value.trim();
        const [nome, ...sobrenomeArr] = nomeCompleto.split(' ');
        const sobrenome = sobrenomeArr.join(' ');
        const email = document.getElementById('email').value;
        const data_nascimento = document.getElementById('data_nascimento').value;
        const telefoneFixo = document.getElementById('telefone_fixo').value;
        const telefoneCelular = document.getElementById('telefone_celular').value;

        let pessoa;

        if (tipo === 'professor') {
            const area_atuacao = document.getElementById('area').value;
            const link_latters = document.getElementById('lattes').value;
            const matricula = document.getElementById('matricula-professor').value;
            pessoa = new Professor(nome, sobrenome, email, data_nascimento, telefoneFixo, telefoneCelular, area_atuacao, link_latters, matricula);
        } else if (tipo === 'aluno') {
            const curso = document.getElementById('curso').value;
            const matricula = document.getElementById('matricula-aluno').value;
            pessoa = new Aluno(nome, sobrenome, email, data_nascimento, telefoneFixo, telefoneCelular, curso, matricula);
        }
        console.log(pessoa);
        return false;
    } else {
        return false;
    }
}