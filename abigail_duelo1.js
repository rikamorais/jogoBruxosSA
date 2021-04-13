function duelar(){
    var escolha = prompt("Digite 1 para Ataque\nDigite 2 para Defesa\nDigite 3 para Magia");

    if (escolha == 1){
        alert ("Oh não!");
        alert ("O Ataque de Natasha Smith é maior que o seu.");
        alert ("Você perdeu o duelo!");
        window.location ="gameover.html";
    }
    else if (escolha == 2){
        alert ("Sim!");
        alert ("A sua Defesa é melhor.");
        alert ("Você venceu o duelo!!!");
        window.location ="abigail_5.html";
    }
    else if (escolha == 3){
        alert ("Oh não!");
        alert ("A Magia de Natasha Smith é superior à sua.");
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