// Função Simples
function hello() {
    console.log("hello function")
}
console.log(typeof(hello))
hello()

//função atribuida
const hello2 = function () {
    console.log("Helllooooooooooooooooooo")
}
console.log(typeof(hello2))
hello2 ()

//arrow function (simplificação da função atribuida)
//function == =>

const hello3 = () => {
    console.log("Hello ARRow")
}

//Funções com passagem de parametros e retorno
function somarS (num1,num2){
    return (console.log(num1+num2))
}

somarS(1,1)

//arrow function simplificada (o retorno é implicito)
const somarAFS = (num1,num2) => console.log(num1+num2)

somarAFS(1,1)