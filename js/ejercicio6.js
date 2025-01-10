/* Comparar dos conjuntos
   By Mariana Vargas 
*/

//Funcion donde los parametros son arrayA y arrayB representando los arreglos a comprobar
const sonIguales = (arrayA, arrayB) => {

    //Conversión de los arreglos recibidos a sets
    const setA = new Set(arrayA);
    const setB = new Set(arrayB);

    //Evaluar elementos comunes de los sets
    const elementosComunes = setA.intersection(setB);

    //Si el número de elementos del setA es igual a los elementos comunes entre ambos arreglos, ambos tiene los mismos elementos
    if (setA.size == elementosComunes.size) {
       return true;
    //En caso de no tener los mismo elementos
    } else {
       return false;
    }
}

console.warn('Elementos iguales');
console.log(sonIguales([1,2,3,4,5], [3,2,1,5,4])); //True
console.warn('Elementos diferentes');
console.log(sonIguales([1,2,3,6,7], [4,2,1,7,6])); //False
