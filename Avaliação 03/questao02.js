import leia from "readline-sync";

var valorHora = leia.question("Informe o valor da hora: ");
var qtdHoras = leia.question("Informe a quantidade de horas trabalhadas: ");
var percentualDes = leia.question("Informe o percentual de desconto: ");

var sb = valorHora * qtdHoras;
console.log("Salário bruto: " + sb);

var des = sb * (percentualDes / 100)
console.log("Valor do desconto " + des);

var sl = sb - des;
console.log("Salário liquido: " + sl);