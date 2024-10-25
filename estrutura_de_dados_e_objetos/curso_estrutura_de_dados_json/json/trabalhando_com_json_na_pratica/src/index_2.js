main();

function main() {
    let invoice = invoiceData();    
    generateInvoice(invoice);
}


function invoiceData() {
    let invoice = {
        name:"Lucas",
        age: 30,
        products: {
            0: ['Mouse 2xwm', 29.90],
            1: ['Teclado Mecânico', 129.99],
            2: ['Monitor', 899.99]
        }
    }
    return invoice;
}



function generateInvoice(invoice) {
    console.log("Nome comprador: " + invoice.name);
    console.log("Idade: " + invoice.age);
    /* 
    for (let i in invoice.products) {
        console.log(invoice.products[i][0] +' - R$'+ invoice.products[i][1].toFixed(2));
    }
    */
    console.log("==========================");
    console.log("Produtos comprados: ");
    console.log("==========================");
   for (let index in invoice.products) {
       let [productName, productValue] = invoice.products[index];
       console.log(`${productName} - R$ ${productValue.toFixed(2)}`);
   }
}