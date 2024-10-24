main();

function main() {
    torrar("Pão Integral", 1.90 , "Lucas");
    torrar("Pão De Sal");
    torrar("Pão De Sal", 10.90);

}

function torrar(pao, valor = 10.90, nome = "Cliente Default")  {
    console.log(`Torrando ${pao} para ${nome}`);
    console.log(`Valor total: ${valor}`);
}

