import leia from "readline-sync"

console.log("Informe o valor de cada corrida");

var cor1 = leia.question("Digite primeiro valor");

var cor2 = leia.question("Digite segundo valor");

var cor3 = leia.question("Digite terceiro valor");

var cor4 = leia.question("Digite quarto valor");

var cor5 = leia.question("Digite quinto valor");

var total = (cor1+cor2+cor3+cor4+cor5);
var desconto =(total * 0.25);
var valor_a_pagar = (total - desconto);


console.log("Valor total: " + total);
console.log("Valor a ser pago: " + valor_a_pagar);
console.log("Valor de desconto (%25): " + desconto);

