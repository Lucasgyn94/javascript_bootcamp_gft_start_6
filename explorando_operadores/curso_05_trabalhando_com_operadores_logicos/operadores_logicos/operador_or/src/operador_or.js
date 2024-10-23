// OR (||) - nosso boneco só pode sair se tiver sem chuva ou com guarda chuva
let tempo = "chuva";
let item = "guarda chuva";
let podeSair = (tempo !== "chuva") || (item === "guarda chuva") ? 'Pode sair' : 'Não pode sair';
console.log(podeSair);