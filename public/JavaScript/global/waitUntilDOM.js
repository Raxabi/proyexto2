import { get } from "./index.js"

const loader = get("loader");
const mainWrapper = get("main-wrapper");

document.addEventListener("DOMContentLoaded", () => {
    $(loader).fadeOut(2000, () => {
        $(mainWrapper).fadeIn(500)
    })
})