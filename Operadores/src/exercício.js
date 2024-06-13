import leia from "readline-sync";

var adicional = 0
var nome_colaborador = leia.question("Informe o nome do colaborador");
var salario_fixo = leia.questionFloat("Informe o salario fixo do colaborador");
var dependentes = leia.questionInt("Informe a quantidade de dependentes");

switch (dependentes){
    case 0:
        adicional = 0.02;
        break;
    case 1:
        adicional = 0.05;
        break;
    case 2:
        adicional = 0.07;
        break;
    case 3:
        adicional = 0.01;
        break;
    default:
        adicional = 0.015;
        break;
}
var salario_bruto = salario_fixo + (Number(adicional) * salario_fixo);

console.log("Salario final: R$" + salario_bruto);
