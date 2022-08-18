// Menu:
// 1 - Pipoca - 10s (padrão)
// 2 - Macarrão - 8s (padrão)
// 3 - Carne - 15s (padrão)
// 4 - Feijão - 12s (padrão)
// 5 - Brigadeiro - 8s (padrão)

const comida = 1;
const tempo = 10;

function microondas(comida, tempo) {
  let comidaSelecionada = "";
  let tempoPadrao = 0;

  if (comida == 1) {
    comidaSelecionada = "Pipoca";
    tempoPadrao = 10;
  } else if (comida == 2) {
    comidaSelecionada = "Macarrão";
    tempoPadrao = 8;
  } else if (comida == 3) {
    comidaSelecionada = "Carne";
    tempoPadrao = 15;
  } else if (comida == 4) {
    comidaSelecionada = "Feijão";
    tempoPadrao = 12;
  } else if (comida == 5) {
    comidaSelecionada = "Brigadeiro";
    tempoPadrao = 8;
  } else {
    console.log("Prato inexistente");
  }

  console.log(`${comidaSelecionada} - ${tempo}s`);

  for (let i = 0; i < tempo; i++) {
    console.log(`${tempo - i} 🕒`);
  }

  console.log("Prato pronto, bom apetite!!! 🍽️");

  if (tempo < tempoPadrao) {
    return console.log("Tempo insuficiente ❄️")
  } else if (tempo > (tempoPadrao * 2) && tempo <= (tempoPadrao * 3)) {
    return console.log("A comida queimou 🔥")
  } else if (tempo > (tempoPadrao * 3)) {
    return console.log("Kabumm 💥")
  }
}

microondas(comida, tempo);