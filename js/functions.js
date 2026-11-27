// 1. MENÚ LATERAL
const btnMenu = document.getElementById("btnMenu");
const sideMenu = document.getElementById("sideMenu");
const btnCloseMenu = document.getElementById("btnCloseMenu");

btnMenu.addEventListener("click", () => {
    sideMenu.classList.add("open");
});

btnCloseMenu.addEventListener("click", () => {
    sideMenu.classList.remove("open");
});

// 2. CARRITO
const btnCart = document.getElementById("btnCart");
const btnCloseCart = document.getElementById("btnCloseCart");
const cartBadge = document.getElementById("cartBadge");
const cartSection = document.querySelector(".car");
const addButtons = document.querySelectorAll(".products__btn");

let count = 3; // porque ya hay 3 en el HTML

function updateBadge() {
    cartBadge.textContent = count;
}

addButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Buscamos los datos del producto donde se hizo click
        const product = btn.closest(".products__item");
        const img = product.querySelector(".products__img").src;
        const title = product.querySelector(".products__title").textContent;
        const price = product.querySelector(".products__price").textContent;

        // Creamos el nuevo item del carrito
        const newItem = document.createElement("div");
        newItem.classList.add("car__item");
        newItem.innerHTML = `
            <img class="car__img" src="${img}" alt="${title}">
            <p class="car__description">${title}</p>
            <p class="car__description">$${price}</p>
            <i class="car__delete"><img src="img/quitar.png" alt="Icono Quitar" class="car__delete--icon"></i>
        `;

        cartSection.appendChild(newItem);

        count++;
        updateBadge();
    });
});

// 3. BORRAR DEL CARRITO (funciona también para los nuevos)
// Usamos delegación porque los nuevos botones no existían al inicio
cartSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("car__delete--icon")) {
        e.target.closest(".car__item").remove();
        if (count > 0) {
            count--;
            updateBadge();
        }
        
    }
});

// 4. ABRIR Y CERRAR CARRITO
btnCart.addEventListener("click", () => {
    cartSection.classList.add("open");
});

btnCloseCart.addEventListener("click", () => {
    cartSection.classList.remove("open");
});