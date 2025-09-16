//Calculadora de elo simples
let ranks = [["Ferro", 0, 10], ["Bronze", 11, 20], ["Prata", 21, 50], ["Ouro", 51, 80], ["Diamante", 81, 90], ["Lendário", 91, 100,], ["Imortal", 101, 102]]

let victoryScore = positiveCalc(5, 5)
let playerRank = ""

//achando o saldo de vitorias positivas
function positiveCalc(victoryNum, defeatNum){
    let positiveCalc = victoryNum - defeatNum
    return positiveCalc
}

let countRanks = 0
while (countRanks < ranks.length){
    if (victoryScore >= ranks[countRanks][1] && victoryScore <= ranks[countRanks][2]){
        playerRank = ranks[countRanks][0]
    }
    countRanks++
}

console.log("o jogador tem um MMR de " + victoryScore +" que o coloca no rank " + playerRank)