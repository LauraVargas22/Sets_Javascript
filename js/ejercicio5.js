/* Diferencia de conjuntos
   By Mariana Vargas 
*/

//Arreglos proporcionados convertidos a sets
const conjuntoA = new Set([1, 2, 3, 4, 5]);
const conjuntoB = new Set([4, 5, 6, 7, 8]);

//Uso de intersección para conocer los elementos comunes del conjunto A y B
const elementosDiferentes = conjuntoA.difference(conjuntoB);
//Impresión de los elementos comunes
console.log({elementosDiferentes});