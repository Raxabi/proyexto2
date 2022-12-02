const { localStorage, JSON } = globalThis

import {
    counter,
    productsToShopContainer
} from "../proto/mainIds.js"

import {
    icons,
    buttons
} from "../proto/mainClass.js";

import {
    addToLocalStorage
} from "./api/useLocalStorage.js"

/**
 * @type {{
 *  name: string
 * }[]}
 */
const initialProducts = JSON.parse(localStorage.getItem("products"))

localStorage.setItem("products", JSON.stringify(initialProducts ?? []))

counter.textContent = initialProducts.length

if (window.innerWidth === 1366) {
    icons.forEach(icon => {
        icon.classList.remove("la-2x");
    })
}

if (initialProducts.length === 0) {
    if (productsToShopContainer) {
        productsToShopContainer.style.border = "none"
    }
}

if (initialProducts.length + 1 >= 10) {
    counter.textContent = "9+"
    counter.style.left = "2px"
}

buttons.forEach(button => {
    button.addEventListener('click', event => {
        addToLocalStorage(event.target.name)
   });
})