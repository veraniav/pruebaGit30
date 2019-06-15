//Ciclo For

/* for(let i = 0; i <= 100; i = i + 1){
    console.log(i)
} */
// ciclo del 500 al 1000 de 2 en 2
// ciclo del 100 al 0 de -3
// ciclo de 1 al 50 de 10 en 10

/* for(let i = 500; i <= 1000; i = i + 2){
    console.log(i)
} 

for(let i = 100; i >=0; i = i - 3){
    console.log(i)}


 for(let i = 1; i <= 50; i = i + 10){
     console.log(i)
 } */

 // Challenge
 // usando el ciclo for, evaluar los numeros del 1/100 y decir si es cuales son pares e impares

/*  for(let e = 1; e <= 100; e = e + 1)
    if(e % 2 === 0){
    
      console.log(e + "es par");
    }
    else{
        console.log(e + "es impar")} */
         
// numero del 1-100
// si son divisibles entre 3-> Fizz
// si son divisibles entre 5 -> Buzz
// si son divisibles entre 5 y 3 -> FizzBuzz

/* for(let e = 1; e <=100; e = e + 1)
   if(e % 3 === 0 && e % 5 === 0){
       console.log(e + " fizzBuzz")
   }else if (e % 5 === 0){
       console.log(e + " Buzz")
   }else if (e % 3 === 0){
       console.log(e + " Fizz")
   }else{
       console.log(e)
   } */

/*    let array =  ["a", "b", "c", "d", "e", "f", "g", "h"]

   for(let i = 0; i < array.length ; i ++){
       console.log(array[i])
       /* console.log(array.length)} */
   
 
// con el ciclo for, hacer las tablas de multiplicar el 1-10
// mostrar en la consola

/* for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
   console.log(i + " * " + j + " = " + i*j);
}
}
 */

// Arreglo de 10
// Push 5 elementos e iterar ese arreglo

let array = ["house", "tienda", "hotel", "airbnb", "cabana", "boongalo", "beach", "mountain", "sky", "netflix"]
array.push("house")
array.push("tienda")
array.push("sky")
array.push("beach")
array.push("sky")

for(let i = 0; i < array.length ; i ++){
    console.log(array[i])
}

