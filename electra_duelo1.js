function duelar(){
    var escolha = prompt("Digite 1 para Ataque\nDigite 2 para Defesa\nDigite 3 para Magia");

    if (escolha == 1){
        alert ("Sim!");
        alert ("O seu ataque foi certeiro!");
        alert ("Você venceu o duelo!!!");
        window.location ="electra_5.html";
    }
    else if (escolha == 2){
        alert ("Oh não!");
        alert ("A sua Defesa não é maior que a de Bertold Zum.");
        alert ("Você perdeu o duelo.");
        window.location ="gameover.html";
    }
    else if (escolha == 3){
        alert ("Oh não!");
        alert ("A Magia de Bertold Zum é superior à sua.");
        alert ("Você perdeu o duelo!");
        window.location ="gameover.html";
    }
    else {
        alert ("Oh não!");
        alert ("Nenhum atributo foi escolhido.");
        alert ("Você perdeu o duelo!");
        window.location ="gameover.html";
    }
    
}

duelar();