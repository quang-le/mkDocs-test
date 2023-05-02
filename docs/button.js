const footer = document.getElementsByTagName("footer")[0]
const button = document.createElement("button")
button.classList = ["btn btn-neutral"]
button.id="toggleLanguage"
const pathname = window.location.pathname
console.log("PATH", pathname)
button.textContent = pathname === '/fr/' ? "English" : "Français"
button.onclick = ()=>{
    if (pathname === "/fr/"){
        const newLocation = window.location.href.replace(pathname,'/en/')
        window.location.replace(newLocation) 
    } else if (pathname === "/"){
        const newLocation = window.location.href.concat('fr/')
        window.location.replace(newLocation) 
    }else {
        const newLocation = window.location.href.replace(pathname,'/fr/')
        window.location.replace(newLocation) 
    }
}

footer.appendChild(button)
