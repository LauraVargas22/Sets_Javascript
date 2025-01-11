# Ejercicios Javascript usando Sets
Por medio de este proyecto se desarrollaron ejercicios lógicos sobre el uso de sets en Javascript, así mismo se hizo uso de HTML y CSS en la elaboración de cada ejercicio propuesto.

1. [Primer Ejercicio](js/ejercicio1.js):
    Creación de Set y uso de método size() para conocer el número de elementos dentro del set.

2. [Segundo Ejercicio](js/ejercicio2.js):
    Se proporciona un array y se busca eliminar elementos duplicados en este por lo que se convierte a set.

3. [Tercer Ejercicio](js/ejercicio3.js):
    Se busca conocer si el array tiene elementos duplicados por lo que se convierte en set y si el tamaño del set es igual al array original no tiene elementos duplicados.

4. [Cuarto Ejercicio](js/ejercicio4.js):
    Conocer los elementos en común, para lo cual usa la operacion de conjuntos intersection().

5. [Quinto Ejercicio](js/ejercicio5.js):
    Conocer los elementos del primer conjunto que no están en el segundo conjunto, para lo cual se usa la operación de conjuntos difference().

6. [Sexto Ejercicio](js/ejercicio6.js):
    Comparar si dos arreglo tiene los mismos elementos, para el desarrolló de este se creó una función que recibiera como parámetros dos arreglos, los cuales se convertieron en sets, evaluándose los elementos comunes, si el número de elementos en elementos comunes es igual al tamaño del set, se confirma si tiene o no elementos iguales.

7. [Séptimo Ejercicio](js/ejercicio7.js):
    Se proporciona una cadena de texto la cual es parámetro en la funcion contarPalabrasUnicas(), en la cual el texto es fragmentado con el método split(), el cual se convierte en set conociendo su tamaño por medio de size().

8. [Octavo Ejercicio](js/ejercicio8.js):
    En este se creó una lista de invitados en la cual se pudiera añadir, eliminar y mostrar invitados. Para su elaboración se creó un menú de opciones donde el usuario pudiera acceder a cada una de las funcionalidades ya mencionadas, así mismo salir del programa, esto se realizó por medio de  un switch - En la primera opción, el usuario ingresa el nombre del invitado, comprobándose que este no esté registrado con el método has, si no está registrado se añade al set.
    - En la segunda opción, se elimina el invitado ingresado por el usuario con el método delete(), así mismo se corrobora que no esté registrado previamente.
    - En la tercera opción, se itera sobre el set mostrando cada uno de los invitados registrados.
    - Por último se permite al usuario salir del programa.
    Además se corrobora que la opción ingresada sea correcta de lo contrario se muestra un mensaje de alerta.

