const heroi = [
    {nome: 'Herói de Ferro', xp: 1000, tipo: 'Ferro'},
    {nome: 'Herói de Bronze', xp: 1500, tipo: 'Bronze'},
    {nome: 'Herói de Prata', xp: 2500, tipo: 'Prata'},
    {nome: 'Herói de Ouro', xp: 5500, tipo: 'Ouro'},
    {nome: 'Herói de Platina', xp: 7500, tipo: 'Platina'},
    {nome: 'Herói de Ascendente', xp: 8500, tipo: 'Ascendente'},
    {nome: 'Herói de Imortal', xp: 9500, tipo: 'Imortal',},
   {nome: 'Herói de Radiante', xp: 10500, tipo: 'Radiante'},
]


for (let i = 0; i < heroi.length; i++) {
    if (heroi[i].xp < 1000) {
        console.log(`O ${heroi[i].nome} está no nível de: ${heroi[i].tipo}`);
    } else if (heroi[i].xp > 1000 && heroi[i].xp <= 2000) {
        console.log(`O ${heroi[i].nome} está no nível de: ${heroi[i].tipo}`);
    } else if (heroi[i].xp > 2000 && heroi[i].xp <= 5000) {
        console.log(`O ${heroi[i].nome} está no nível de: ${heroi[i].tipo}`);
    } else if (heroi[i].xp > 5000 && heroi[i].xp <= 7000) {
        console.log(`O ${heroi[i].nome} está no nível de: ${heroi[i].tipo}`);
    } else if (heroi[i].xp > 7000 && heroi[i].xp <= 8000) {
        console.log(`O ${heroi[i].nome} está no nível de: ${heroi[i].tipo}`);
    } else if (heroi[i].xp > 8000 && heroi[i].xp <= 9000) {
        console.log(`O ${heroi[i].nome} está no nível de: ${heroi[i].tipo}`);
    } else if (heroi[i].xp > 9000 && heroi[i].xp <= 10000) {
        console.log(`O ${heroi[i].nome} está no nível de: ${heroi[i].tipo}`);
    } else {
        console.log(`O ${heroi[i].nome} está no nível de: ${heroi[i].tipo}`);
    }
}
