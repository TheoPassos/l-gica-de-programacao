import leia from "readline-sync";

var numero = leia.questionInt("Digite ate qual valor quer: ");

var anterior = 1;
var atual = 1;
var proximo;

for(var i = 0; i < numero; i++){
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
    resultado = resultado + " - " + proximo;
}
console.log(resultado);