export class FormaDeBolo {
    constructor(saborDaMassa, saborDoRecheio) {
        this.saborDaMassa = saborDaMassa;
        this.saborDoRecheio = saborDoRecheio;
    }

    escrever() {
        console.log(`Um delicioso bolo com massa de ${this.saborDaMassa} e recheio de ${this.saborDoRecheio}`);
    }
    assar() {
        console.log(`Assando bolo de ${this.saborDaMassa} com ${this.saborDoRecheio}`);
    }
}