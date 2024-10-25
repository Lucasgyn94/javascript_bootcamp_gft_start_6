// JSON = JavasScript Object Notation
// Chave e Valor com o objetivo de transferir dados
main();

function main() {
    let name = "Lucas";
    let age = 30;
    let products = ["mouse 2xwm", "Teclado Mecânico", "Monitor"];
    let productsValues = [29.90, 129.99, 899.99];
    
    generateInvoice(name, age, products, productsValues);
}

function generateInvoice(name, age, products, productsValues) {
    console.log("Nome comprador: " + name);
    console.log("Idade: " + age);
    console.log("Produtos comprados: ")
    for (let i = 0; i < products.length; i++) {
        console.log(products[i] + ' - R$ ' + productsValues[i].toFixed(2));
    }
}




