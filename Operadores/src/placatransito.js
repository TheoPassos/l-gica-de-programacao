import leia from "readline-sync";

var ultimoNumero = leia.questionInt("Digite o ultimo numero da placa do carro");
switch(ultimoNumero){
    case 0:
    case 1:
        console.log("Não pode rodar na segunda-feira")
        break;
    case 2:
    case 3:
        console.log("Não pode rodar na terça-feira");
        break;
    case 4:
    case 5:
        console.log("Não pode rodar na quarta-feira");
        break;
    case 6:
    case 7:
        console.log("Não pode rodar na quinta feira");
        break;
    case 8:
    case 9:
        console.log("Não pode rodar na sextra-feira");
        break;

}