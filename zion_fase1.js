function adivinharNumeroSecreto(){

    var numeroRandom = Math.random();
    var numeroInteiro = (numeroRandom * 5);
    var numeroSecreto = (parseInt(numeroInteiro));
    var tentativas = 2;

    alert ("Número de tentativas: 2");

    while (tentativas > 0) {
        var chute = prompt("Digite um número entre 0 e 5:");
        if (chute == numeroSecreto){
            alert ("Parabéns! Você acertou!");
            window.location.href="zion_2.html";
            break;
        }
        else if (chute > numeroSecreto) {
            tentativas -= 1;
            alert ("Errou! O número secreto é menor que "+ chute + ". Você tem mais " +tentativas+ " tentativas.");
        }
        else if (chute < numeroSecreto) {
            tentativas -= 1;
            alert ("Errou! O número secreto é maior que " + chute + ". Você tem mais " +tentativas+ " tentativas.");
        }
        else {
            alert ("Valor inválido." + ".");
            tentativas -= 1;
        }  
    }

    if (tentativas == 0){
        alert("Game Over");
        window.location.href="gameover.html";
    }
    
}

adivinharNumeroSecreto();

