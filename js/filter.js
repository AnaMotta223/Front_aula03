//faz um filtro de uma lista - retorna true ou false
const numeros = [2,4,6,9,13];

//percorre a lista e filtra quais numeros sao multiplos de 2
//numeros.filter((num) => num%2==0).forEach((num) => console.log(num));

numeros.filter((num) => num%2==0? console.log(num) : console.log(num + " Não é múltiplo"));