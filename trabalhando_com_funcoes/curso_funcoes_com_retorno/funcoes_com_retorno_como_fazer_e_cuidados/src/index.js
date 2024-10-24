main();

function main() {
    let resultado = somar(1, 2);
    console.log(resultado);

    let retornaNumeros = vetorDeNumeros();
    console.log(retornaNumeros);
}

function somar(n1, n2) {
    let somatorio = n1 + n2;
    return somatorio;
}

function vetorDeNumeros() {
    let vetor = [1, 3, 4];
    return vetor;
}
