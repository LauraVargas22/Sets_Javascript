/* Verificar elementos únicos
   By Mariana Vargas 
*/

//Declaración de arrays
const tieneDup = [1,2,3,5,5];
const noTieneDup = [1,2,3,4,5];

//Función para comprobar si los arrays declarados tienen duplicados
const tieneDuplicados = (array) => {
    //Convierte array proporcionado a set
    const arrayNuevo = [...new Set(array)];
    //Operador ternario que comprueba si el array tiene duplicados
    duplicados = ((array.length) == (arrayNuevo.length)) ? 'False' : 'True';
}

//Salida cuando tiene elementos duplicados 'True'
tieneDuplicados(tieneDup);
console.log({duplicados})

//Salida cuando no tiene elementos duplicados 'False'
tieneDuplicados(noTieneDup);
console.log({duplicados})