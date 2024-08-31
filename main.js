function verificarParOuImpar() {
    let numero = prompt("Digite um número inteiro positivo:");

    if (numero !== null && numero > 0 && Number.isInteger(Number(numero))) {
        if (numero % 2 === 0) {
            alert(`O número ${numero} é Par.`);
        } else {
            alert(`O número ${numero} é Ímpar.`);
        }
    } else {
        alert("Por favor, digite um número inteiro positivo.");
    }
}


function verificarPrimo() {
    let numero = prompt("Digite um número inteiro positivo:");

    if (numero !== null && numero > 0 && Number.isInteger(Number(numero))) {
        let ehPrimo = true;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo && numero > 1) {
            alert(`O número ${numero} é Primo.`);
        } else {
            alert(`O número ${numero} não é Primo.`);
        }
    } else {
        alert("Por favor, digite um número inteiro positivo.");
    }
}


function calcularFatorial() {
    let numero = prompt("Digite um número inteiro positivo:");

    if (numero !== null && numero > 0 && Number.isInteger(Number(numero))) {
        let fatorial = 1;
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        alert(`O fatorial de ${numero} é ${fatorial}.`);
    } else {
        alert("Por favor, digite um número inteiro positivo.");
    }
}


function verificarTipoDado() {
    let dado = prompt("Digite um dado:");

    if (confirm("Deseja verificar o tipo do dado informado?")) {
        document.body.innerHTML += `<p>O tipo do dado informado é: ${typeof dado}</p>`;
    } else {
        document.body.innerHTML += "<p>Obrigado por visitar esta página.</p>";
    }
}

