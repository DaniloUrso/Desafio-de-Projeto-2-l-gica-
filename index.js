rankingDoHeroi()

let partidas = 140
let derrotas = 10
const resultado = rankingDoHeroi(partidas, derrotas)

console.log(resultado)

function rankingDoHeroi(partidas, derrotas) {
    let resultado = partidas - derrotas

    let nivel

    switch (true) {
    case resultado < 10 : nivel = 'Ferro 👎'; break 
    case resultado >= 11 && resultado <= 20 : nivel = 'Bronze 🥉' 
    break
    case resultado >= 21 && resultado <= 50 : nivel = 'Prata 🥈' 
    break 
    case resultado >= 51 && resultado <= 80 : nivel = 'Ouro 🥇' 
    break
    case resultado >= 81 && resultado <= 90 : nivel = 'Diamante 💎' 
    break
    case resultado >= 91 && resultado <= 100 : nivel = 'Lendário ♾️' 
    break
    case resultado >= 101 : nivel = 'Imortal ♾️' 
    break
    default:
    }    
        
    return 'O Herói tem saldo de ' + resultado + ' vitórias ' + 'e está no nível ' + nivel 
     
}



    







