let precio = 400000
const precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio

let cantidad = document.querySelector(".cantidad")
let valorTotal = document.querySelector (".valor-total")

const btnAgregar = document.querySelector("#botonAgregar")
const btnRestar = document.querySelector("#botonRestar")

btnAgregar.onclick = function(){
    cantidad.innerHTML++
    valorTotal.innerHTML = cantidad.innerHTML*precio
 }

 btnRestar.onclick = function(){
    if(cantidad.innerHTML==0){
        cantidad.innerHTML=0
    }
    else{
        cantidad.innerHTML--
    }
    valorTotal.innerHTML = cantidad.innerHTML*precio
}