class Carro  {
    constructor(ano,cor){
    this.ano = ano
    this.cor = cor
    }
    criarcarro() {
        console.log("🚗")
    }
    ligar(){
        console.log(`O carro esta ligado. ${this.ano} ${this.cor}`)
    }
    desligar(){
        console.log(`O carro esta desligado
            `)
    }
    acelerar(){
        console.log("VRUMMMMM")
    }

}
const honda = new Carro("Honda civic", "Preto")

honda.criarcarro()
honda.ligar()
honda.acelerar()
honda.desligar()

const fusca = new Carro("FUSCAO", "Branco")

fusca.criarcarro()
fusca.ligar()
fusca.acelerar()
fusca.desligar()

class Aviao extends Carro  {
    constructor(envergadura){
        super(0, "N/A")
        this.envergadura = envergadura
    }
    criarcarro(){
        console.log(`✈️ \br a envergadura é ${this.envergadura}`)
    }
    desligar(){
        console.log("🪂 caindoooo")
    }
    acelerar(){
        console.log("🛫 VRUMMMMMMMM")
    }
}
const aviao = new Aviao(100)
aviao.criarcarro()
aviao.acelerar()
aviao.desligar()