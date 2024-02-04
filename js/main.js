//ALGORITMO CONDICIONAL MUUUUUUY BASICO
// alert('Bienvenido a Arcadia.');

// let nombre = prompt('Cual es tu nombre?');
// let apellido = prompt('cual ess tu apellido?');

// let nombreCompleto = nombre + ' ' + apellido;
//     alert('Hola ' + nombreCompleto);

// let edad = prompt('Por favor ingresa tu edad.');

// if(edad >=18){
//    alert('Puedes ingresar al sitio, bienvenido.');
// }else{
//     alert('Debes ser mayor de edad para ingresar al sitio.');
// }

//ALGORITMO CICLO MUUUUUUY BASICO

// for (let xp = 1; xp < 11; xp+=1){
//     if (xp === 11) {
//         break;
//     }
//     console.log('XP ' + xp);
// }
// console.log('LVL UP!!!')

alert('Por favor identifiquese.');

let nombre = prompt('Ingrese Nombre');
let apellido = prompt('Ingrese Apellido');

alert('Por favor ingrese numero de ID y PIN');

function solicitarNumeroId(){
    let numeroId = prompt('Ingrese ID');
    let pin = prompt('Ingrese PIN');

    if(numeroId ==='1234' && pin ==='4321'){
        alert('Bienvenido ' + nombre + ' ' + apellido + '.');
    }else if(numeroId !='' && pin !=''){
        alert('Informacion incorrecta, intente nuevamente.');
    }
}
solicitarNumeroId()
