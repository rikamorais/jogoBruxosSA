var cartaAbigailLabyrinth = {
  nome: "Abigail Labyrinth",
  ataque: 70,
  defesa: 70,
  magia: 90,
  caracteristica: "inteligência",
  objetoMagico: "Capa invisível"
}

var cartaZionJinx = {
  nome: "Zion Jinx",
  ataque: 80,
  defesa: 60,
  magia: 80,
  caracteristica: "emocional",
  objetoMagico: "Espada Escalibur"
}

var cartaElectraSoulton = {
  nome: "Electra Soulton",
  ataque: 75,
  defesa: 65,
  magia: 89,
  caracteristica: "lógica",
  objetoMagico: "Sandálias de Hermes"
}

var cartaMaquina = 0;
var cartaJogador = 0;

var cartas = [cartaAbigailLabyrinth, cartaZionJinx, cartaElectraSoulton];

function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas [numeroCartaMaquina];
  console.log (cartaMaquina);
}

console.log (sortearCarta());