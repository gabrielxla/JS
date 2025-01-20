let nome, idade, altura, vip , imc 


nome = "Gabriel"
idade = 17
altura = 1.70
peso = 58
vip = true

imc = peso / (altura*altura) 
fmc = 208 - (0.7 * idade)
console.clear()

console.log("Ficha do aluno\n")
console.log(`Nome: ${nome}\n Idade: ${idade} \n Altura: ${altura.toFixed(2)}\n IMC: ${imc.toFixed(2)}\n FMC: ${fmc} bpm`)
