function duelar(){
    var escolha = prompt("Digite 1 para Ataque\nDigite 2 para Defesa\nDigite 3 para Magia");

    if (escolha == 1){
        alert ("Oh não!");
        alert ("Brianna tem um Ataque supeior ao seu!");
        alert ("Você perdeu o duelo!!!");
        window.location ="zion_5.html";
    }
    else if (escolha == 2){
        alert ("Oh não!");
        alert ("A sua Defesa não é maior que a de Brianna Orborne.");
        alert ("Você perdeu o duelo.");
        window.location ="gameover.html";
    }
    else if (escolha == 3){
        alert ("Sim!");
        alert ("Sua Magia é superior.");
        alert ("Você venceu o duelo!");
        window.location ="zion_5.html";
    }
    else {
        alert ("Oh não!");
        alert ("Nenhum atributo foi escolhido.");
        alert ("Você perdeu o duelo!");
        window.location ="gameover.html";
    }
    
}

duelar();