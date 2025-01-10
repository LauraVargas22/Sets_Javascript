/* Contar Palabras Únicas
   By Mariana Vargas 
*/

//Texto a evaluar
const texto = "Hola mundo mundo de JavaScript";

//Función que recibe como parámetro el texto previamente declarado
const contarPalabrasUnicas = (texto) => {
    //Uso de método split para separar texto de string de acuerdo al espacio en blanco
    const textoFragmentado = texto.split(" ");
    //Conversión de array a set
    const textoSet = new Set(textoFragmentado);
    //Impresión del número de elementos del string sin contar repetidos
    console.log(textoSet.size);
}


//Llamado de la función
contarPalabrasUnicas(texto);