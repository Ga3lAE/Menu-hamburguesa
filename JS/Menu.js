let boton = document.getElementById ('menu-button') 
let lista = document.getElementById ('menu-cont-ul')

boton.addEventListener('click',() =>{
    lista.classList.toggle('active')
})