const body = document.getElementsByTagName("body")[0]

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const black = Math.round(Math.random() * 255) 
    const orange = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    
    const color = `rgb(${black}, ${orange}, ${blue})`
    body.style.backgroundColor = color;
}