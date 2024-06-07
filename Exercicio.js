function converterIdadeParaDias() {

    let anos = parseInt(prompt("Digite a idade em anos:"));
    let meses = parseInt(prompt("Digite a idade em meses"));
    let dias = parseInt(prompt("Digite a idade em dias"));

    let totalDias = (anos * 365) + (meses * 30) + dias;

    alert("A idade total em dias é: " + totalDias + " dias.");

    converterIdadeParaDias();

    
}