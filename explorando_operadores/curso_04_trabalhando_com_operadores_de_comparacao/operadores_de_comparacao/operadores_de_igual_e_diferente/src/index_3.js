let CPFPermitido = "222.555.333-01";
let CPFUsuario = "222.555.333-02";
let ehBloqueado = CPFUsuario !== CPFPermitido ? true : false;

console.log(`E um usuário inválido? ${ehBloqueado}`)