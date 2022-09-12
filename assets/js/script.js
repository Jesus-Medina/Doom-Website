
const doomSelect = document.querySelector("#doom-select")


doomSelect.addEventListener("mouseover", (e) => {
    if (e.target.tagName == "A") {
        let cambiar = e.target.nextSibling
        cambiar.setAttribute("src", "https://web.archive.org/web/20090724175826/http://www.geocities.com/ubergamingworld/Doom_Guy.gif")
        cambiar.classList.add("doom-guy")

        setTimeout(() => {
            cambiar.setAttribute("src", "")
            cambiar.classList.remove("doom-guy")
        }, 1000);
    }
}, false)
