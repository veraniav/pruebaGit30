   
 /*   function sum(a,b,c){

    return a + b + c
       console.log(4 + 6)
   }

   
   console.log(sum(10,50,100))
   console.log(sum(30,50,100))
   console.log(sum(10,60,100)) */

  /*  function res (){
       console.log(10-5)
   }

   sum()
   res()
   */

// Funcion que reciba 4 parametros que los reste y mostrarlo en consola

/* function res (a,b,c,d){

    return a - b - c - d

}

console.log(res(40,20,10,5))
console.log(res(100,200,25,20)) */

/* function sum (a, b){
    return a + b
}

function res (c, d){
    return c - d
}
console.log(sum(1,res(5,4))) */

/* const sum = (a,b) => {
    return a + b
}

console.log(sum(5,5)) */

// Arrow function que multiplique 3 numeros y otra que divida 2 numeros

/* function multiplique (a,b,c){
    return a * b * c
}

console.log(multiplique(5,5,2))

function divida (d,g){

    return d / g
}

console.log(divida(100,3))

 */
/* 
const multiplique = (a,b,c) =>{
    return a * b * c
}

console.log(multiplique(5,5,4)) */

// funcion calcule el area de un cuadrado y otra el area de un rectangulo

/* const cuadrado = (a) =>{
    return a * a
}
console.log(cuadrado(5))

const rectangulo = (b,c) =>{
    return b*c
}
console.log(rectangulo(2,3))

 const frase = (a,b,c,d,f) =>{
     return a + " " + b + " " + c + " " + d + " " + f 
 }

 console.log(frase("cinta","blanca","es","muy","cool")) */



const factorial = (x) =>{

    let resultado = 1
    for(let i = 1; i <= x; i++){
        resultado = resultado * i
    }
    console.log(resultado)
}
factorial(3);