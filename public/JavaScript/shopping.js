import {
    productsToShopContainer,
    counter
} from "./proto/mainIds.js"

const { localStorage, JSON } = globalThis

/**
 * @type {{
 *  name: string
 * }[]}
 */
const actualProducts = JSON.parse(localStorage.getItem("products"))

actualProducts.forEach(product => {
    const productContainer = document.createElement("div")
    const productName = document.createElement("h1")
    const deleteProduct = document.createElement("button")
    
    productName.textContent = product.name
    deleteProduct.textContent = "Eliminar el producto"

    productContainer.setAttribute("class", "shopping-product")
    deleteProduct.setAttribute("class", "delete-button")
    deleteProduct.setAttribute("name", product.name)
    
    productsToShopContainer
        .appendChild(productContainer)
        .appendChild(productName)
    productContainer.appendChild(deleteProduct)

    deleteProduct.addEventListener("click", e => {
        productContainer.remove()
        actualProducts.splice(actualProducts.indexOf(e.target.name), 1);
        localStorage.setItem("products", JSON.stringify(actualProducts))
        counter.textContent = actualProducts.length
        if (actualProducts.length === 0) {
            productsToShopContainer.style.border = "none"
        }
        if (actualProducts.length < 10) {
            counter.textContent = actualProducts.length
            counter.style.left = "7px"
        }
    })
});