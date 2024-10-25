import {FormaDeBolo} from './models/FormaDeBolo.js';

let boloFesta = new FormaDeBolo("Chocolate", "Nutella");
boloFesta.escrever();
 
let boloPremium = new FormaDeBolo("Coco", "Baunilha");
boloPremium.escrever();
boloPremium.assar();