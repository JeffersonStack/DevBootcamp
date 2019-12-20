// Atividades Challenger 06

// Questao 01
let championship = "Copa do Brasil";
console.log(championship);

// Questao 02
let teams = ["Flamengo", "São Paulo", "Corithians", "Vasco", "Palmeiras"];

console.log("Times que estão participando do campeonato:", teams);

// Questao 03
function showTeamPosition(numPosition) {
  if (numPosition < 1 || numPosition > 5) {
    return "Não temos a informação do time que está nessa posição.";
  }

  return `O time que está em ${numPosition}º lugar é o ${
    teams[numPosition - 1]
  }.`;
}

console.log(showTeamPosition(1));

// Questao 04
console.log(showTeamPosition(1));
console.log(showTeamPosition(2));
console.log(showTeamPosition(3));
console.log(showTeamPosition(4));

console.log(showTeamPosition(8));

// Questao 05
let x = 20;
while (x <= 30) {
  console.log(x++);
}

// Questao 06
function convertToHex(color) {
  let hex;

  switch (color) {
    case "red":
      hex = "#FF2100";
      break;

    case "blue":
      hex = "#0710FF";
      break;

    case "green":
      hex = "#00FF1E";
      break;

    case "yellow":
      hex = "#FFF80A";
      break;

    case "black":
      hex = "#000000";
      break;

    case "pink":
      hex = "#F299FF";
      break;

    default:
      return `Não temos o equivalente hexadecimal para ${color}.`;
  }

  return `O hexadecimal para a cor ${color} é ${hex}.`;
}

console.log(convertToHex("green"));

// Questao 07
console.log(convertToHex("green"));
console.log(convertToHex("blue"));
console.log(convertToHex("red"));
console.log(convertToHex("yellow"));
console.log(convertToHex("black"));
console.log(convertToHex("pink"));
console.log(convertToHex("brow"));
console.log(convertToHex("skyblue"));
