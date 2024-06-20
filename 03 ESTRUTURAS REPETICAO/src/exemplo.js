import leia from "readline-sync";

var nota = leia.questionFloat("Digite a nota: ");
while(nota < 0.0 || nota > 10.0){
    console.log("Nota invalida")
    nota = leia.questionFloat("Digite a nota novamente: ");
}
console.log("Nota invalida")