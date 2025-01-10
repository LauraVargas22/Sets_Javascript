/* Crear una lista de invitados.
   By Mariana Vargas 
*/

//Declaración del Set
const guestsSet = new Set();
let isAddGuests = true

//Agregar invitados donde el set declarado es parámetro
const addGuests = (guestsSet) => {
    //Ingreso del nombre del invitado
    let nombre = prompt('Ingrese el nombre del invitado: ');
    
    //Verificación si el nombre del usuario hace parte del set
    if (guestsSet.has(nombre)) {
        //Mensaje de alerta en caso de que el nombre ya haga parte del set
        alert('El nombre ingresado ya está en la lista');
    //Si no hace parte del set
    } else {
        //Se añade al set el nombre ingresado
        guestsSet.add(nombre);
        //Se muestra en pantalla el nombre ingresado
        alert(`${nombre} se añadió a la lista`);
    }   
}

//Eliminar invitados donde el set declarado es parámetro
const deleteGuests = (guestsSet) => {
    //Ingreso del nombre del invitado a eliminar
    let nombre = prompt('Ingrese el nombre del invitado: ');
    
     //Verificación si el nombre del usuario a eliminar hace parte del set
    if (guestsSet.has(nombre)) {
        //Se elimina de la lista el nombre ingresado
        guestsSet.delete(nombre);
        //Se muestra en pantalla el nombre eliminado
        alert(`Se eliminó el nombre ${nombre}`);
    } else {
        //Mensaje de alerta en caso de que el nombre a eliminar no haga parte del set
        alert(`${nombre} no se encontró en la lista`);
    }  
}


//Se muestran los invitados que hacen parte del set
const showGuests = (guestsSet) => {
    //Con forEach se itera sobre cada elemento del set
    guestsSet.forEach((guest) => {
        alert(guest)
    });
}


//Menú de selección de usuario
while (isAddGuests) {
    try {
        //Se muestran las opciones
        alert('1. Add Guests 2.Delete Guests 3.Guests 4.Salir');
        //Campo de entrada donde el usuario selecciona la opción
        let option = prompt('Seleccione:_');
        //De acuerdo a la opción seleccionada se llama a la función correspondiente
        switch (option) {
            //Se agregan invitados
            case '1':
                addGuests(guestsSet);
                continue;
            //Se eliminan invitados
            case '2':
                deleteGuests(guestsSet);
                continue;
            //Se muestran los invitados ingresados
            case '3':
                showGuests(guestsSet);
                continue;
            //Opción de salida del programa
            case '4':
                alert('Saliendo del programa...');
                isAddGuests = false;
                break;
            //En caso de que la opción seleccionada sea incorrecta
            default:
                alert('Error en la opción seleccionada')
        }
    } catch (error) {
        alert('Se produjo un error')
    }
}

