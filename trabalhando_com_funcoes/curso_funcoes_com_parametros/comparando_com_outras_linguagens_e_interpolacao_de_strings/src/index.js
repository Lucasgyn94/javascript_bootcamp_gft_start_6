main();

function main() {
    createStringConnection("dbLucas", "lucas", 123);
}

function createStringConnection(databaseName, user, pass) {
    console.log(`Connect: ${databaseName}; user=${user} pass=${pass}`);

}