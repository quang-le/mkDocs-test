const footer = document.getElementsByTagName("footer")[0]
const button = document.createElement("button")
button.classList = ["btn btn-neutral"]
button.id="toggleLanguage"
const pathname = window.location.pathname
const isFR = pathname.search("/fr/") !== -1
const isEN = pathname.search('/en/') !== -1
console.log("PATH", pathname)
button.textContent = isFR ? "English" : "Français"
button.onclick = ()=>{
    if (isFR){
        const newPathname = pathname.replace('/fr/', '/en/')
        const newLocation = window.location.href.replace(pathname,newPathname)
        window.location.replace(newLocation) 
    } else if (isEN){
        const newPathname = pathname.replace('/en/', '/fr/')
        const newLocation = window.location.href.replace(pathname,newPathname)
        window.location.replace(newLocation) 
    } else if (pathname === "/"){
        const newLocation = window.location.href.concat('fr/')
        window.location.replace(newLocation) 
    } else {
        const newPathname = `/fr${pathname}`
        console.log('NEW', newPathname, pathname)
        console.log('NEW2', pathname)
        const newLocation = window.location.href.replace(pathname,newPathname)
        window.location.replace(newLocation) 
    }
}

footer.appendChild(button)
