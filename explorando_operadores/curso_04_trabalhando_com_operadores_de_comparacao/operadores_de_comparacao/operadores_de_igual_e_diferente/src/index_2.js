// guardar o valor em uma variável de resultado TRUE ? FALSE
let cpfBloqueado = '123.445.222-45';
let cpfUsuario = '222.111.222-09';
let ehCPFBloqueado = cpfUsuario === cpfBloqueado ? true : false;

console.log(`O cpf está bloqueado? ${ehCPFBloqueado}`);