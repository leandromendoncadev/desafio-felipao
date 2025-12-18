
// 1) IF / ELSE IF / ELSE

let nomeDoHeroi = "Leandro"
let experiencia = 5003
let nivel = ""

if (experiencia < 1000) {
  nivel = "Ferro"
} else if (experiencia <= 2000) {
  nivel = "Bronze"
} else if (experiencia <= 5000) {
  nivel = "Prata"
} else if (experiencia <= 7000) {
  nivel = "Ouro"
} else if (experiencia <= 8000) {
  nivel = "Platina"
} else if (experiencia <= 9000) {
  nivel = "Ascendente"
} else if (experiencia <= 10000) {
  nivel = "Imortal"
} else {
  nivel = "Radiante"
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel)


// 2) FOR + IF (vários heróis)

let listaDeHerois = [
  { nome: "Ana", experiencia: 800 },
  { nome: "Bruno", experiencia: 2500 },
  { nome: "Carla", experiencia: 12000 }
]

for (let indice = 0; indice < listaDeHerois.length; indice++) {
  let heroi = listaDeHerois[indice]
  let nivelDoHeroi = ""

  if (heroi.experiencia < 1000) {
    nivelDoHeroi = "Ferro"
  } else if (heroi.experiencia <= 2000) {
    nivelDoHeroi = "Bronze"
  } else if (heroi.experiencia <= 5000) {
    nivelDoHeroi = "Prata"
  } else if (heroi.experiencia <= 7000) {
    nivelDoHeroi = "Ouro"
  } else if (heroi.experiencia <= 8000) {
    nivelDoHeroi = "Platina"
  } else if (heroi.experiencia <= 9000) {
    nivelDoHeroi = "Ascendente"
  } else if (heroi.experiencia <= 10000) {
    nivelDoHeroi = "Imortal"
  } else {
    nivelDoHeroi = "Radiante"
  }

  console.log("O Herói de nome " + heroi.nome + " está no nível de " + nivelDoHeroi)
}


// 3) SWITCH (explicando o nível)

let nivelParaExplicacao = "Ouro"

switch (nivelParaExplicacao) {
  case "Ferro":
    console.log("Nível inicial do herói.")
    break
  case "Ouro":
    console.log("Nível avançado, herói experiente.")
    break
  case "Radiante":
    console.log("Nível máximo, herói lendário.")
    break
  default:
    console.log("Nível intermediário do herói.")
    break
}


// 4) WHILE (simulando evolução)

let passosDeEvolucao = 0
let experienciaAtual = 500   // começa com pouco XP

while (passosDeEvolucao < 3) {
  let nivelAtual = ""

  if (experienciaAtual < 1000) {
    nivelAtual = "Ferro"
  } else if (experienciaAtual <= 5000) {
    nivelAtual = "Prata"
  } else {
    nivelAtual = "Radiante"
  }

  console.log("Com XP = " + experienciaAtual + ", o herói está no nível " + nivelAtual)

  experienciaAtual = experienciaAtual + 3000  // herói ganha mais XP
  passosDeEvolucao = passosDeEvolucao + 1     // conta quantas vezes evoluiu
}
