import leia from "readline-sync";

var n1 = leia.questionFloat("Nota 1: ");
var p1 = leia.questionFloat("Peso 1: ");

var n2 = leia.questionFloat("Nota 2: ");
var p2 = leia.questionFloat("Peso 2: ");

var n3 = leia.questionFloat("Nota 3: ");
var p3 = leia.questionFloat("Peso 3: ");

var mp = (n1*n1)+(n2*p2)+(n3*p3)/(p1+p2+p3);

console.log("Média ponderada é: " + mp)