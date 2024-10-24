main();

function main() {
    // jeito certo
    torrar("Pão Integral", 1.90 , "Lucas");
    // evite colocar undefined como valor de uma variável
    torrar("Pão De Sal", undefined, undefined);
    // jeito certo deixando a variável a ser escondida no ultimo espaço
    torrar("Pão De Sal", 11.90);

}

function torrar(pao, valor = 10.90, nome = "Cliente Default")  {
    console.log(`Torrando ${pao} para ${nome}`);
    console.log(`Valor total: ${valor}`);
}

