/* Eliminar duplicados de un arreglo.
   By Mariana Vargas 
*/

//Arreglo proporcionado
const numerosDuplicados = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 10];

//Conversión de array a set
const SetNumbers = [...new Set(numerosDuplicados)];
//Impresión dek set
console.log(SetNumbers);