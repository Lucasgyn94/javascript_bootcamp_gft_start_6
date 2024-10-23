let possuiOvos = false ;
let itensComprados = [];

if (possuiOvos) {
    itensComprados.push('Leite', ' Farinha');
} else {
    console.log("Passou na sessão de congelados");
    itensComprados.push("Lasanha congelada");
}

console.log(`Item(s) comprado(s): ${itensComprados}`);