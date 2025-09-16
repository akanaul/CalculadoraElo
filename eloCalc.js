//Calculadora de elo simples
let victoryNum = 5
let defeatNum = 5
let finalElo = calcElo(victoryNum, defeatNum)

console.log("Seu elo é " + finalElo)

function calcElo(victoryNum, defeatNum){
    let calcElo = victoryNum - defeatNum
    return calcElo
}