//Função declarativa
function mensagem(){
    console.log("Aula de JS");
}

//mensagem();

function soma(num1, num2){
    return num1 + num2;
}

//função anônima
let texto = function (t) {
    console.log(texto);
    return "Oi";
}

console.log(texto("Aula de JS"));

//console.log(`Resultado:${soma(10,20)}`);

//function expression ou arrow function
let msg = () => console.log("Aula de JS");
msg();

let res = (num1,num2) => num1 + num2;

console.log(res(10,40));