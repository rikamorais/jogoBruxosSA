function duelar(){
    var escolha = prompt("Digite 1 para Ataque\nDigite 2 para Defesa\nDigite 3 para Magia");

    if (escolha == 1){
        alert ("Oh não!");
        alert ("O ataque de Mistral Wolf é maior que o seu.");
        alert ("Você perdeu o duelo!");
        window.location.href="gameover.html";
    }
    else if (escolha == 2){
        alert ("Sim!");
        alert ("A sua defesa é melhor.");
        alert ("Você venceu o duelo!!!");
        window.location.href="abigail_5.html";
    }
    else if (escolha == 3){
        alert ("Oh não!");
        alert ("A Magia de Mistral é superior à sua.");
        alert ("Você perdeu o duelo!");
        window.location.href="gameover.html";
    }
    else {
        alert("Escolha inválida.");
        window.location.href="abigail_4.html"
    }
    
}

duelar();