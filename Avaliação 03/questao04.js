import leia from "readline-sync";

var nota = leia.questionFloat("Informe a nota: ");

if(nota > 10.0 || nota < 10.0){
    console.log("Nota invalida!")
}else {
    if(nota > 9.0){
        console.log("Conceito A");
    }else if (nota >= 8.0){
        console.log("Conceito B");
    }else if (nota >= 7.0){
        console.log("Conceito C");
    }else if (nota >= 6.0){
        console.log("Conceito D");
    }else {
        console.log("Conceito F");
}
}