let jsonData = {
    name:"Lucas",
    age: 30,
    products: [
        {
            name:"mouse 2xwm", 
            value: 29.90
        },
        {
            name:"Teclado Mecânico", 
            value: 129.99
        },
        {
            name:"Monitor", 
            value: 899.99
        }
    ]
};


let jsonString = JSON.stringify(jsonData, null, 2);
console.log(jsonString);

