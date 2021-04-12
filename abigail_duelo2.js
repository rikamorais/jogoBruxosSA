function duelar(){
    var escolha = prompt("Digite 1 para Ataque\nDigite 2 para Defesa\nDigite 3 para Magia");

    if (escolha == 1){
        alert ("Sim!");
        alert ("O seu ataque é fulminante!");
        alert ("Você venceu o duelo!!!");
        window.location.href="abigail_8.html";
    }
    else if (escolha == 2){
        alert ("Oh não!");
        alert ("A defesa de Mortimer Snow é maior que a sua.");
        alert ("Você perdeu o duelo!!!");
        window.location.href="gameover.html";
    }
    else if (escolha == 3){
        alert ("Oh não!");
        alert ("A Magia de Mortimer é superior à sua.");
        alert ("Você perdeu o duelo!");
        window.location.href="gameover.html";
    }
    else {
        alert("Escolha inválida.");
        window.location.href="abigail_7.html"
    }
    
}

duelar();