// NOT (!) - nega uma afirmação

const exemplo_1 = () => {
    let tempo = "chuva";
    let estaChovendo = tempo !== "chuva";
    console.log(estaChovendo);
}

const exemplo_2 = () => {
    let tempo = "chuva";
    let estaChovendo = tempo === "chuva";
    console.log(!estaChovendo);
}

const exemplo_3 = () => {
    let tempo = "chuva";
    let estaChovendo = tempo === "chuva";
    console.log(!!estaChovendo);
}

const exemplo_4 = () => {
    let tempo = "chuva";
    let horario = 8;
    let resultado = (tempo !== "chuva") && (horario > 6)
    console.log(resultado);
}

const exemplo_5 = () => {
    let tempo = "chuva";
    let horario = 8;
    let resultado = !((tempo !== "chuva") && (horario > 6))
    console.log(resultado);
}

exemplo_1();
exemplo_2();
exemplo_3();
exemplo_4();
exemplo_5();