// Menu:
// 1 - Pipoca - 10s (padrão)
// 2 - Macarrão - 8s (padrão)
// 3 - Carne - 15s (padrão)
// 4 - Feijão - 12s (padrão)
// 5 - Brigadeiro - 8s (padrão)

const comida = 1;
const tempo = 30;

function microondas(comida, tempo) {
  switch (comida) {
    case 1:
      const tempoPadraoPipoca = 10;
      console.log(`Pipoca - ${tempo}s 🕒`);
      for (let i = 0; i < tempo; i++) {
        console.log(`${tempo - i} 🕒`);
      }
      console.log("Prato pronto, bom apetite!!! 🍽️");
      if (tempo < tempoPadraoPipoca) {
        return console.log("Tempo insuficiente ❄️")
      } else if (tempo >= (tempoPadraoPipoca * 2) && tempo < (tempoPadraoPipoca * 3)) {
        return console.log("A comida queimou 🔥")
      } else if (tempo >= (tempoPadraoPipoca * 3)) {
        return console.log("Kabumm 💥")
      }
      break;
    case 2:
      const tempoPadraoMacarrao = 8;
      console.log(`Macarrao - ${tempo}s 🕒`);
      for (let i = 0; i < tempo; i++) {
        console.log(`${tempo - i} 🕒`);
      }
      console.log("Prato pronto, bom apetite!!! 🍽️");
      if (tempo < tempoPadraoMacarrao) {
        return console.log("Tempo insuficiente ❄️")
      } else if (tempo >= (tempoPadraoMacarrao * 2) && tempo < (tempoPadraoMacarrao * 3)) {
        return console.log("A comida queimou 🔥")
      } else if (tempo >= (tempoPadraoMacarrao * 3)) {
        return console.log("Kabumm 💥")
      }
      break;
    case 3:
      const tempoPadraoCarne = 15;
      console.log(`Carne - ${tempo}s 🕒`);
      for (let i = 0; i < tempo; i++) {
        console.log(`${tempo - i} 🕒`);
      }
      console.log("Prato pronto, bom apetite!!! 🍽️");
      if (tempo < tempoPadraoCarne) {
        return console.log("Tempo insuficiente ❄️")
      } else if (tempo >= (tempoPadraoCarne * 2) && tempo < (tempoPadraoCarne * 3)) {
        return console.log("A comida queimou 🔥")
      } else if (tempo >= (tempoPadraoCarne * 3)) {
        return console.log("Kabumm 💥")
      }
      break;
    case 4:
      const tempoPadraoFeijao = 12;
      console.log(`Feijao - ${tempo}s 🕒`);
      for (let i = 0; i < tempo; i++) {
        console.log(`${tempo - i} 🕒`);
      }
      console.log("Prato pronto, bom apetite!!! 🍽️");
      if (tempo < tempoPadraoFeijao) {
        return console.log("Tempo insuficiente ❄️")
      } else if (tempo >= (tempoPadraoFeijao * 2) && tempo < (tempoPadraoFeijao * 3)) {
        return console.log("A comida queimou 🔥")
      } else if (tempo >= (tempoPadraoFeijao * 3)) {
        return console.log("Kabumm 💥")
      }
      break;
    case 5:
      const tempoPadraoBrigadeiro = 8;
      console.log(`Brigadeiro - ${tempo}s 🕒`);
      for (let i = 0; i < tempo; i++) {
        console.log(`${tempo - i} 🕒`);
      }
      console.log("Prato pronto, bom apetite!!! 🍽️");
      if (tempo < tempoPadraoBrigadeiro) {
        return console.log("Tempo insuficiente ❄️")
      } else if (tempo >= (tempoPadraoBrigadeiro * 2) && tempo < (tempoPadraoBrigadeiro * 3)) {
        return console.log("A comida queimou 🔥")
      } else if (tempo >= (tempoPadraoBrigadeiro * 3)) {
        return console.log("Kabumm 💥")
      }
      break;
    default:
      console.log("Prato inexistente");
  }
}

microondas(comida, tempo);