

//ITEMS ARRAY

const ITEM =[

    {id: 1, name: "raccoon", image: "../images/synthraccoon.jpg", price: 8000 },
    {id: 2, name: "monke", image: "../images/synthmonke.jpg", price: 8000 },
    {id: 3, name: "cat", image: "../images/synthcat.jpg", price: 8000 },
    {id: 4, name: "trooper", image: "../images/synthtrooper.jpg", price: 8000 },
    {id: 5, name: "deathstar", image: "../images/synthdeathstar.jpg", price: 8000 },
    {id: 6, name: "daft", image: "../images/daft.jpg", price: 8000 },
    {id: 7, name: "car", image: "../images/synthcar.jpg", price: 8000 },
    {id: 8, name: "retro", image: "../images/retro.jpg", price: 8000 },
    {id: 9, name: "pacman", image: "../images/pacman.jpg", price: 10000 },
    {id: 10, name: "cyberpunk", image: "../images/cybersynth.jpg", price: 10000 },
    {id: 11, name: "netrunner", image: "../images/netrunner.jpg", price: 10000 },
    {id: 12, name: "synthcity", image: "../images/synthcity.jpg", price: 10000 },
    {id: 13, name: "arasaka", image: "../images/arasaka.jpg", price: 10000 },
    {id: 14, name: "bladerunner", image: "../images/bladerunner.jpg", price: 10000 },
    {id: 15, name: "bladerunner2", image: "../images/bladerunner2.jpg", price: 10000 },
    {id: 16, name: "cyberpunk2", image: "../images/cyber.jpg", price: 10000 },
    {id: 17, name: "cybercat", image: "../images/cybercat.jpg", price: 10000 },
    {id: 18, name: "cyberpunkGirl", image: "../images/cybergirl.jpg", price: 10000 },
    {id: 19, name: "cyberpunkGirl2", image: "../images/cybergirl2.jpg", price: 10000 },
    {id: 20, name: "samurai", image: "../images/cybersamurai.jpg", price: 10000 },
    {id: 21, name: "maelstrom", image: "../images/maelstrom.jpg", price: 10000 },
    {id: 22, name: "samurai2", image: "../images/samurai.jpg", price: 10000 },
    {id: 23, name: "traumaTeam", image: "../images/traumateam.jpg", price: 10000 },
    {id: 24, name: "tron", image: "../images/tron.jpg", price: 10000 }

]

let cartItemsQuantity = 0;

let cart = JSON.parse(localStorage.getItem('cart') )|| [];

//COUNTER

function updateCartIcon(){
    const CART_ICON = document.getElementById('items-quantity');
    if(CART_ICON){
        CART_ICON.textContent = cartItemsQuantity;
    }
}

//SHOW CART ITEMS

function showCartItems(){
    const CART_ITEMS = document.getElementById('cart-items');
    CART_ITEMS.innerHTML = '';

    cart.forEach(ITEM => {
        const ITEMS = document.createElement('div');
        ITEM.textContent = ITEMS.name;
        CART_ITEMS.appendChild(ITEMS);
    });
   
}

//CARDS
function createItemCard(){
    const CONTAINER = document.getElementById('item-container');


    ITEM.forEach(ITEM =>{
        const CARD = document.createElement('div');
        CARD.classList.add('item-card', 'card-align')



        const image = document.createElement('img');
        image.src = ITEM.image;
        image.alt = ITEM.name;
        image.classList.add('item-image');
        CARD.appendChild(image);
        const NAME = document.createElement('h3');
        NAME.textContent = ITEM.name;
        NAME.classList.add('item-name');
        CARD.appendChild(NAME);

        const PRICE = document.createElement('p');
        PRICE.textContent = ITEM.price;
        PRICE.classList.add('item-price');
        CARD.appendChild(PRICE);

        const BUY_BTN = document.createElement('button');
        BUY_BTN.textContent = 'Agregar Item';
        BUY_BTN.classList.add('btn');
        BUY_BTN.addEventListener('click',()=>{
            cart.push(ITEM);
            localStorage.setItem('cart', JSON.stringify(cart));
            cartItemsQuantity++;
            updateCartIcon();
            showCartItems();
        })

        CARD.appendChild(BUY_BTN)

        CONTAINER.appendChild(CARD);

    })
}

createItemCard();

updateCartIcon();

showCartItems();