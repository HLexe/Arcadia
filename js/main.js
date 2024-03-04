

//ITEMS ARRAY

const ITEM =[

    {id: 1, name: "raccoon", image: "../images/", price: 8.000 },
    {id: 2, name: "monke", image: "../images/", price: 8.000 },
    {id: 3, name: "cat", image: "../images/", price: 8.000 },
    {id: 4, name: "trooper", image: "../images/", price: 8.000 },
    {id: 5, name: "deathstar", image: "../images/", price: 8.000 },
    {id: 6, name: "daft", image: "../images/", price: 8.000 },
    {id: 7, name: "car", image: "../images/", price: 8.000 },
    {id: 8, name: "retro", image: "../images/", price: 8.000 },
    {id: 9, name: "pacman", image: "../images/", price: 10.000 },
    {id: 10, name: "cyberpunk", image: "../images/", price: 10.000 },
    {id: 11, name: "netrunner", image: "../images/", price: 10.000 },
    {id: 12, name: "synthcity", image: "../images/", price: 10.000 },
    {id: 13, name: "arasaka", image: "../images/", price: 10.000 },
    {id: 14, name: "bladerunner", image: "../images/", price: 10.000 },
    {id: 15, name: "bladerunner2", image: "../images/", price: 10.000 },
    {id: 16, name: "cyberpunk2", image: "../images/", price: 10.000 },
    {id: 17, name: "cybercat", image: "../images/", price: 10.000 },
    {id: 18, name: "cyberpunkGirl", image: "../images/", price: 10.000 },
    {id: 19, name: "cyberpunkGirl2", image: "../images/", price: 10.000 },
    {id: 20, name: "samurai", image: "../images/", price: 10.000 },
    {id: 21, name: "maelstrom", image: "../images/", price: 10.000 },
    {id: 22, name: "samurai2", image: "../images/", price: 10.000 },
    {id: 23, name: "traumaTeam", image: "../images/", price: 10.000 },
    {id: 24, name: "tron", image: "../images/", price: 10.000 }

]

let cartItemsQuantity = 0;

let cart = JSON.parse(localStorage.getItem('cart') )|| [];

//COUNTER

function updateCartIcon(){
    const CART_ICON = document.getElementById('cartItemsQuantity');
    if(CART_ICON){
        CART_ICON.textContent = cartItemsQuantity;
    }
}

//SHOW CART ITEMS

function showCartItems(){
    const CART_ITEMS = document.getElementById('cart-items');
    CART_ITEMS.innerHTML = '';

    cart.forEach(ITEMS => {
        const ITEM= document.createElement('div');
        item.textContent = ITEMS.nombre;
    });
   CART_ITEMS.appendChild(ITEMS);
}

//CARDS
function createItemCard(){
    const CONTAINER = document.getElementById('item-container');


    ITEM.forEach(ITEM =>{
        const CARD = document.createElement('div');
        CARD.classList.add('item-card');


        const imagen = document.createElement('img');
        image.src = ITEM.image;
        image.alt = ITEM.nombre;
        image.classList.add('item-image');
        card.appendChild(image);
        const NAME = document.createElement('h3');
        NAME.textContent = ITEM.name;
        NAME.classList.add('item-name');
        CARD.appendChild(NAME);

        const PRICE = document.createElement('p');
        prrice.textContent = ITEM.price;
        price.classList.add('item-price');
        card.appendChild(price);

        const buyBtn = document.createElement('button');
        buyBtn.textContent = 'Agregar Item';
        buyBtn.classList.add('buy-button');
        buyBtn.addEventListener('click',()=>{
            cart.push(ITEM); //agregamos el producto al carrito :D
            localStorage.setItem('cart', JSON.stringify(cart));
            cartItemsQuantity++;
            updateCartIcon();
            showCartItems();
        })

        .appendChild(buyBtn)

        CONTAINER.appendChild(card);

    })
}

createItemCard();

updateCartIcon();

showCartItems();