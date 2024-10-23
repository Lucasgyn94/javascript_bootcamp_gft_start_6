// while = Enquanto

let pontosDeVida = 0;
let contador = 0;

while (contador < 10) {
    console.log('Aumentando mais 1 no valor do contador');
    console.log(contador);
    pontosDeVida += 1;
    contador += 1;
}

console.log(`Pontos de vida totais: ${pontosDeVida}`);