
/* let titulo = document.getElementById('titulo')
let parrafo = document.getElementById('parrafo')
let button = document.getElementById('button')
let input = document.getElementById('input') */

/* console.log(titulo) */

/* titulo.innerHTML = "Titulo cambiado"
parrafo.innerHTML = "Perro pitbull" */

/* const cambio = () => {
    titulo.innerHTML = "Titulo cambiado"
}

button.addEventListener('click',cambio)

button.addEventListener('click', ()=> {
     console.log("Si funciona")
}) */
/* sirve para comprobar que funcione */

/* const inputM = () =>{
    let texto = input.value
    mostrar.innerHTML = texto
}

button.addEventListener('click', inputM)
 */
//Preguntar al usuario su nombre, su libro favorito, si prefiere la pizza con pepperoni o no
//mostrarlo en 3 etiquetas diferentes

let inpName = document.getElementById('inputname')
let inpBook = document.getElementById('inputbook')
let inpPizza = document.getElementById('inputpizza')

//Mostrar

let mostrarN = document.getElementById('mostrarname')
let mostrarB = document.getElementById('mostrarbook')
let mostrarP = document.getElementById('mostrarpizza')

//boton

let boton = document.getElementById('button')

//tarjeta

let tarjeta = document.getElementById('tarjeta')



const mostrarAll = ()=>{

    tarjeta.classList.remove('d-none')

    let textName = inpName.value
    let textBook = inpBook.value
    let textPizza = inpPizza.value


    mostrarN.innerHTML = textName
    mostrarB.innerHTML = textBook
   

    if(textPizza === "si"){
        mostrarP.innerHTML = ":D"
    }else if(textPizza==="no"){
        mostrarP.innerHTML = "D:"
    }else{
        mostrarP.innerHTML= "No entendi"
    }



}

boton.addEventListener('click', mostrarAll)