function mainSaveData() {
    getData();
    checkValues();
    sendToDataBase();
}

function getData() {
    console.log('Obtendo dados');
}

function checkValues() {
    console.log('Checando valores');
}

function sendToDataBase() {
    console.log('Cadastrando dados no banco de dados');
}

mainSaveData();