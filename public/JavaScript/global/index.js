import { addToLocalStorage } from "./api/useLocalStorage.js"
import {
    counter,
    manzanillina
} from "../proto/mainIds.js";

import {
    icons
} from "../proto/mainClass.js"

for (let i = 0; i <= 5; i++) {
    counter.textContent = i.toString()
    if (i >= "10") {
        counter.textContent = "9+"
        counter.style.left = "2px"
    }
}

if (window.innerWidth === 1366) {
    for (const i in icons) {
        icons[i].classList.remove("la-2x");
    }   
}

const localStorageLength = JSON.stringify(localStorage.getItem("product"))

manzanillina.addEventListener("click", e => {
    addToLocalStorage("manzanilla")
})