class Bloco {
    constructor(textura,resistencia){
       this.textura = textura
       this.resistencia = resistencia

    }
    criarBloco (){
        console.log("-------------------------------------------------------")
        console.log("┌─┐")
        console.log("└─┘")
    }
    construir() {
        console.log(`Bloco de ${this.textura}colocado.`)
    }
    minerar() {
        console.log("□ □ □ □ Recursos obtidos!")
    }
}
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |  ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|  ")
console.log("")

const bloco1 = new Bloco("terra", 1)
