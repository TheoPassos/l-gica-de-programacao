import leia from "readline-sync";

var ano = leia.questionInt("Informe o ano: ");

if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
    console.log("Bissexto");
}else {
    
}