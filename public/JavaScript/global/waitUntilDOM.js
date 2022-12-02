import { loader, mainWrapper } from "../proto/mainIds.js"

document.addEventListener("DOMContentLoaded", () => {
    $(loader).fadeOut(2000, () => {
        $(mainWrapper).fadeIn(500)
    })
})