const exemplo_1 = () => {
    let fruta = 'banana';

    switch(fruta) {
        case 'laranja':
            console.log('Suco de laranja');
            console.log('Está pronto');
            break;
        case 'banana':
        case 'morango':
            console.log('Vitamina de ' + fruta);
            break;
        case 'maça':
            console.log('Suco de maça');
            break;
        default: 
            console.log('Suco padrão da casa');
    }

}
const exemplo_2 = () => {
    let fruta = 'banana';

    switch(fruta) {
        case 1:
            console.log('Suco de laranja');
            break;
        case 2:
        case 3:
            console.log('Vitamina');
            break;
        case 4:
            console.log('Suco de maça');
            break;
        default: 
            console.log('Suco padrão da casa');
    }
}