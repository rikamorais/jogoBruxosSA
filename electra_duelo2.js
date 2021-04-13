function duelar(){
    var escolha = prompt("Digite 1 para Ataque\nDigite 2 para Defesa\nDigite 3 para Magia");

    if (escolha == 1){
        alert ("Oh não!");
        alert ("O Ataque de Rebecca Wild é superior ao seu.");
        alert ("Você perdeu o duelo!!!");
        window.location ="gameover.html";
    }
    else if (escolha == 2){
        alert ("Oh não!");
        alert ("A defesa de Rebecca Wild é maior que a sua.");
        alert ("Você perdeu o duelo!!!");
        window.location ="gameover.html";
    }
    else if (escolha == 3){
        alert ("Sim!");
        alert ("Sua Magia derrotou Rebecca Wild.");
        alert ("Você venceu o duelo!");
        window.location ="electra_8.html";
    }
    else {
        alert("Oh não!");
        alert("Você não escolheu um atributo.")
        alert("Game over.")
        window.location ="gameover.html"
    }
    
}

duelar();