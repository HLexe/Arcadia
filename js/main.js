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

// alert('Por favor identifiquese.');

// let nombre = prompt('Ingrese Nombre');
// let apellido = prompt('Ingrese Apellido');

// alert('Por favor ingrese numero de ID y PIN');

// function solicitarNumeroId(){
//     let numeroId = prompt('Ingrese ID');
//     let pin = prompt('Ingrese PIN');

//     if(numeroId ==='1234' && pin ==='4321'){
//         alert('Bienvenido ' + nombre + ' ' + apellido + '.');
//     }else if(numeroId !='' && pin !=''){
//         alert('Informacion incorrecta, intente nuevamente.');
//     }
// }
// solicitarNumeroId()

//REGISTRO
alert("Bienvenido a Arcadia.\nPor favor regístrate para comprar.");

let username = "";
let password = "";

while (username === ""){
    username = prompt("Ingresa nombre de usuario: ");
}

while (password === "" || password.length < 4 || password.length > 10){
    password = prompt("Ingresa password (entre 4 y 10 caracteres): ");
}

alert("Registro exitoso.\nBienvenido a Arcadia, " + username + ".");


let items = [
    {
        name: "Raccoon",
        price: 8000
    },
    {
        name: "Monke",
        price: 8000
    },
    {
        name: "Cat",
        price: 8000
    },
    {
        name: "Trooper",
        price: 8000
    },
    {
        name: "Deathstar",
        price: 8000
    },
    {
        name: "Daft",
        price: 8000
    },
    {
        name: "Car",
        price: 8000
    },
    {
        name: "Retro",
        price: 8000
    },
    {
        name: "Pacman",
        price: 10000
    },
    {
        name: "Cyberpunk",
        price: 10000
    },
];

function showitems() {
    console.log("Listado de productos");
    for (let i = 0; i < items.length; i++) {
    console.log(`${i + 1}. ${items[i].name} - CLP ${items[i].price}`);
        }
}

    function buyitems() {
        let cart = [];
        let option;
    
        while (option !== "0") {
        showitems();
        console.log("0. Finalizar Compra");
        option = prompt("Selecciona un número (del 1 al 10) para comprar, 0 para terminar.\nPuedes ver la lista en la consola.");
    
        if (option !== "0") {
            let itemIndex = Number(option) - 1;
    
            if (itemIndex >= 0 && itemIndex < items.length) {
            let quantity = Number(prompt(`Cuantas ${items[itemIndex].name} quieres comprar?`));
            let item = {
                ...items[itemIndex],
                quantity: quantity
            };
            cart.push(item);
            alert(`Has añadido al carrito: ${item.name}.`);
            console.log(`Has añadido al carrito: ${item.name}.`);
    
            alert(`Añadiste ${item.quantity} t-shirts al carrito.`);
            console.log(`Añadiste ${item.quantity} t-shirts al carrito.`);
            } else {
            alert("Opcion invalida. Intenta nuevamente.")
            }
        }
        }

        
        console.log("Resumen de compra.");
        let total = 0;

        for (let i = 0; i < cart.length; i++) {
        let items = cart[i];
        total += items.price * items.quantity;
        }
   
        alert(`Total a pagar: CLP ${total.toFixed(2)}`);
        console.log(`Total de tu compra: CLP ${total.toFixed(2)}`);
    }

    buyitems();


while(true){
    let color = prompt("Selecciona un color (Blanco/Negro)").toString().toUpperCase();
    let talla = prompt("Selecciona tu talla (S, M, L, XL)").toString().toUpperCase();

    switch (color) {
        case "NEGRO":
            alert(`Elegiste ${color}, talla ${talla}`);
            break;
        case "BLANCO":
            alert(`Seleccionaste ${color}, talla ${talla}`);
            break;
        default:
            alert("Ingresa un color valido.");
        continue;
    }
    break;
}

alert("Compra finalizada, en breve recibiras un email con los detalles.")
alert("Gracias por tu compra.")