//let datos=prompt("Datos");

//alert(datos);
import Binario from './binario.js';

let numero = new Binario(3);

console.log("Binario:",numero.codificacion());

let bin1 = new Binario(1000);

console.log("Decimal:",bin1.decodificacion());


