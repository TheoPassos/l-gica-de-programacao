// IF/ELSE

var codigoErro = leia.questionInt("Digite o código do erro");
switch (codigoErro){
    case 400:
    case 401:
    case 404:
        console.log("HTTP CODE ERROR APLICAÇÃO")
        break;
    case 500:
    case 501:
    case 502:
        console.log("HTTP CODE - ERROR DE SERVIDOR")
        break;
    default:
        console.log("NÃO É ERRO")
        break;
}