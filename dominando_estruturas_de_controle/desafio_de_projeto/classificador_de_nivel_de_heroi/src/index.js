//forma_1();
console.log('Resolução forma 1\n');
const forma_1 = () => {
    let nomeHeroi = "Lucas";
    let xp = 9333;

    if (xp < 1000) {
        console.log(`O Herói ${nomeHeroi} está no nível de: Ferro`);
    } else if (xp > 1000 && xp <= 2000) {
        console.log(`O Herói ${nomeHeroi} está no nível de: Bronze`);
    } else if (xp > 2000 && xp <= 5000) {
        console.log(`O Herói ${nomeHeroi} está no nível de: Prata`);
    } else if (xp > 5000 && xp <= 7000) {
        console.log(`O Herói ${nomeHeroi} está no nível de: Ouro`);
    } else if (xp > 7000 && xp <= 8000) {
        console.log(`O Herói ${nomeHeroi} está no nível de: Platina`);
    } else if (xp > 8000 && xp <= 9000) {
        console.log(`O Herói ${nomeHeroi} está no nível de: Ascendente`);
    } else if (xp > 9000 && xp <= 10000) {
        console.log(`O Herói ${nomeHeroi} está no nível de: Imortal`);
    } else {
        console.log(`O Herói ${nomeHeroi} está no nível de: Radiante`);
    }

}

forma_1();

// forma_2()
console.log('\nResolução forma 2\n');
const forma_2 = () => {
    const herois = [
        {nome: 'Herói de Ferro', xp: 1000, tipo: 'Ferro'},
        {nome: 'Herói de Bronze', xp: 1500, tipo: 'Bronze'},
        {nome: 'Herói de Prata', xp: 2500, tipo: 'Prata'},
        {nome: 'Herói de Ouro', xp: 5500, tipo: 'Ouro'},
        {nome: 'Herói de Platina', xp: 7500, tipo: 'Platina'},
        {nome: 'Herói de Ascendente', xp: 8500, tipo: 'Ascendente'},
        {nome: 'Herói de Imortal', xp: 9500, tipo: 'Imortal'},
        {nome: 'Herói de Radiante', xp: 10500, tipo: 'Radiante'},
    ];
    
    const verificadorNivelHeroi = (heroi) => {
        if (heroi.xp < 1000) {
            console.log(`O ${heroi.nome} está no nível de: ${heroi.tipo}`);
        } else if (heroi.xp >= 1000 && heroi.xp <= 2000) {
            console.log(`O ${heroi.nome} está no nível de: ${heroi.tipo}`);
        } else if (heroi.xp > 2000 && heroi.xp <= 5000) {
            console.log(`O ${heroi.nome} está no nível de: ${heroi.tipo}`);
        } else if (heroi.xp > 5000 && heroi.xp <= 7000) {
            console.log(`O ${heroi.nome} está no nível de: ${heroi.tipo}`);
        } else if (heroi.xp > 7000 && heroi.xp <= 8000) {
            console.log(`O ${heroi.nome} está no nível de: ${heroi.tipo}`);
        } else if (heroi.xp > 8000 && heroi.xp <= 9000) {
            console.log(`O ${heroi.nome} está no nível de: ${heroi.tipo}`);
        } else if (heroi.xp > 9000 && heroi.xp <= 10000) {
            console.log(`O ${heroi.nome} está no nível de: ${heroi.tipo}`);
        } else {
            console.log(`O ${heroi.nome} está no nível de: ${heroi.tipo}`);
        }
    }
    
    for (let i = 0; i < herois.length; i++) {
        verificadorNivelHeroi(herois[i]);
    }    
}

forma_2();


