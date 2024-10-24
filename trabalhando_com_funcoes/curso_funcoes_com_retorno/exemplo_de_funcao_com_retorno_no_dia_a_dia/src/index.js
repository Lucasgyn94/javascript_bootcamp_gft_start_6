main();

function main() {
    console.log(getFirstName("Lucas Ferreira Da Silva"));
    console.log(getFirstNameWithSplitCharacter("Tampinha Ferreira Da Silva", " "));
    console.log(getFirstNameWithSplitCharacter("Joaozinho-Silva", "-"));
}

function getFirstName(name) {
    let firstName = name.split(' ')[0];
    return firstName;
}

function getFirstNameWithSplitCharacter(name, splitCharacter) {
    let firstName = name.split(splitCharacter)[0];
    return firstName;
}
