import {
    counter
} from "../../proto/mainIds.js"

const { localStorage, JSON } = globalThis

/**
 * @type {[{
 *  name: string
 * }]}
 */
const products = JSON.parse(localStorage.getItem("products"))

/**
 * Add new items to the local storage
 * @param {string} name
 */
export function addToLocalStorage(name) {

    counter.textContent = JSON.parse(localStorage.getItem("products")).length + 1

    if (JSON.parse(localStorage.getItem("products")).length + 1 >= 10) {
        counter.textContent = "9+"
        counter.style.left = "2px"
    }

    products.push({"name": `${name}`})
    localStorage.setItem("products", JSON.stringify(products))
}