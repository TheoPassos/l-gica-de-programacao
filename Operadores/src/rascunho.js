import leia from 'readline-sync'  // Importação do readline

var numero_inteiro = leia.questionInt("Digite número");  // Pedir número inteiro

var numero_float = leia.questionInt("Digite número float");  // Pedir número float

var texto = leia.question("Digite um texto/nome")  // Pedir um texto ao usuário

console.log("Saída de dados")  // Saída

switch(texto){
    case "bla":
        console.log("Faz algo")
        break;
}