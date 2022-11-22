const { localStorage } = globalThis;

/**
 * Add new items to the local storage
 * @param {string} name
 */
export function addToLocalStorage(name) {
    let counter = 1
    try {
        /* if (localStorage.getItem("product") === ``) {
            
        } */
        localStorage.setItem("products", [{"product": `${name}_1`}])
    } catch (error) {
        console.info(error)
    }
}