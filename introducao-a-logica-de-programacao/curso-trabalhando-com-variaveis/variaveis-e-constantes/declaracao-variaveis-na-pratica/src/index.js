const nickNameDinamico = () => {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Digite o nome do seu jogador: ", (nickname) => {
        console.log(`Olá ${nickname}, seja bem vindo!`);
        console.log(`${nickname} entrou no servidor!`);
        rl.close();
    });
} 

const nicknameFixo = () => {
    // saida
    console.log("Digite o nome do seu jogador: ");

    // declaração variável
    let nickname = "Lucas Mestre Dos Magos";

    // concatenando uma mensagem fixa + variável
    console.log(`Olá ${nickname}`);

    console.log(`${nickname} entrou no servidor!`);

}

nickNameDinamico();
//nicknameFixo();