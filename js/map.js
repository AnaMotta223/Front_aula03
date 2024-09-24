const numeros = [10,20,30,22,44];
let novoNumeros = [];

//adiciona um elemento da lista numeros multiplicado por 2 na lista novoNumeros
for (let i = 0; i < numeros.length; i++){
    novoNumeros.push(numeros[i] * 2);
}

console.log(novoNumeros);
console.log("-------Resultado com map---------");

//map so trabalha com vetor
//percorre a lista e multiplica cada elemento por 2
let novoMap = numeros.map((numero) => numero * 2);

console.log(novoMap);

//varre o mapa e mostra cada elemento 
novoMap.forEach((numero) => console.log(numero));
