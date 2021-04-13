function lutar(){
    var escolha = prompt("Digite 1 para usar a Pedra Petrificante\nDigite 2 para usar a Pedra Desintegratus\nDigite 3 para usar a Pedra da Morte");

    if (escolha == 1){
        alert ("Muito bem!");
        alert ("Karsus está petrificado.")
        alert ("Escolha outra pedra para continuar.");
        var segundaPedra = prompt("Digite 1 para usar a Pedra Desintegratus\nDigite 2 para usar a Pedra da Morte");
        if (segundaPedra == 1){
            alert ("Isso!");
            alert ("Karsus foi desintegrado!");
            window.location.href="electra_12.html";
        }
        else if (segundaPedra == 2){
            alert ("Oh não!");
            alert ("Karsus se esquivou e contra-atacou com o Feitiço da Morte!");
            alert ("...");
            alert ("Você foi morto!!!");
            window.location.href="gameover.html";
        }
        else {
            alert("Você não escolheu uma pedra!");
            alert("Karsus evocou o Feitiço dos Mortos!");
            alert ("...");
            alert("Você foi atingido!");
            window.location.href="gameover.html";
        }
        
    }
    else if (escolha == 2){
        alert ("Oh não!");
        alert ("Karsus esquivou-se de seu ataque!");
        alert ("Karsus evocou o Feitiço da Vingança!");
        alert ("...");
        alert ("Ele quase te atingiu!");
        alert ("Escolha outra pedra para atacar.");
        var segundaPedra = prompt("Digite 1 para usar a Pedra Petrificante\nDigite 2 para usar a Pedra da Morte.");
        if (segundaPedra == 1){
            alert("Isso!");
            alert("Karsus está petrificado!");
            var terceiraPedra = prompt("Digite 1 para usar a Pedra da Morte!");
            if (terceiraPedra == 1){
                alert("Isso!");
                alert("Karsus foi atingido em cheio!");
                alert("Você é o vencedor!");
                window.location.href="electra_12.html";
            }
            else {
                alert ("Essa não!");
                alert ("Você não escolheu uma pedra.");
                alert ("Karsus se aproveitou de sua distração e lançou o Feitiço Fatal!");
                alert ("Você foi atingido...");
                alert ("Game over.");
                window.location.href="gameover.html";
            }
        }
        else if(segundaPedra == 2 ){
            alert ("Oh não! Karsus conseguiu se defender e evocou o Feitiço Fatal!");
            alert ("Você foi atingido...");
            alert ("Game over.")
        window.location.href="gameover.html";
        }
        else {
            alert ("Você não escolheu uma pedra...");
            alert ("Karsus aproveitou-se da situação e lançou o Feitiço da Morte.");
            alert ("Você foi atingido...");
            alert ("Game over.");
            window.location.href="gameover.html";
        }
    }
    else if (escolha == 3){
        alert ("Oh não!");
        alert ("Karsos escapou!");
        alert ("Karsus contra-atacou com o Feitiço do Retorno!!!");
        alert ("Você se esquivou e agora irá contra-atacar!");
        alert ("Escolha outra pedra para continuar.");
        var segundaPedra = prompt ("Digite 1 para usar a Pedra Petrificante\nDigite 2 para usar a Pedra Desintegratus");
        if (segundaPedra == 1){
            alert ("Muito bem!");
            alert ("Karsus está petrificado.");
            var terceiraPedra = prompt ("Digite 3 para usar a Pedra Desintegratus.");
            if (terceiraPedra == 3){
                alert ("Isso!");
                alert ("Karsus foi atingido e você venceu a batalha!");
                window.location.href="electra_12.html";
            }
            else {
                alert ("Nenhuma pedra foi escolhida!");
                alert ("Karsus aproveitou a sua distração e atacou com o Feitiço da Perdição!");
                alert ("Você foi atingido...");
                alert ("Game over.");
                window.location.href="gameover.html";
            }
        }
        else if (segundaPedra == 2){
            alert ("Oh não!");
            alert ("Karsus conseguiu escapar e evocou o Feitiço da Vingança!");
            alert ("Você foi atingido...");
            alert ("Game over.");
            window.location.href="gameover.html";
        }

        else {
            alert ("Nenhuma pedra foi escolhida!");
            alert ("Karsus atacou com o Feitiço da Perdição!");
            alert ("Você foi atingido e perdeu a batalha.")
            window.location.href="gameover.html";
        }
        
    }
    else {
        alert("Você não escolheu uma pedra!");
        alert ("Karsus evocou o Feitiço da Maldição!");
        alert ("Você foi atingido...");
        alert ("Game Over");
        window.location.href="gameover.html";
    }
    
}
