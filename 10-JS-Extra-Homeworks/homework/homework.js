// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var matriz = Object.entries(objeto);
  return matriz

  // otra opción con for in

  // let array = [];

  // for (key in objeto) {
//    array.push ([key, objeto[key]]) o array.push ([key, objeto.key])
//  }
// return array
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let obj = {};

  for(let i = 0; i < string.length; i++){
    if(!obj[string[i]]){   // obj[string[i] da true si existe o false si no. Entonces el ! (NOT) hace lo contrario, invierte 
      obj[string[i]] = 0;
    }  
    obj[string[i]] += 1;
  }
  return (obj);

  // INVESTIGAR QUE ONDA ESTO
  //Evalúa que lo que mandas en la posición del objeto en ese momento, que es un string, 
  //no exista o "no este repetido" y si no lo está, es false, inicializa la variable en 0, 
  //de caso contrario suma una vez por sí mismo el valor con el que se haya encontrado a esa variable. 
  //Eso es, básicamente lo que hace el programa. Espero que te sirva.

  // otra opción 

  // let obj = {} ;
//  for(let i = 0; i < string.length; i++){
//  var letra = string[i]

//  if (obj[letra] === undefined) {
//    obj [letra] = 1   -----> si no está lo creo (teniendo en cuenta que el objeto lo estos creando entonces obj.letra en principio no existe)
//  }
//  else {
//    obj[letra] += 1  ------> si está le sumo uno
 // }


}





function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var mayuscula = '';
  var minuscula = '';
  for (i = 0; i<s.length; i++){ 
     if(s[i] === s[i].toUpperCase()){ 
          mayuscula = mayuscula + s[i]; 
       }
   else {
          minuscula = minuscula + s[i];
        } 
   }       
  return (mayuscula + minuscula) 

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

 // return ( str.split("").reverse().join("")); 
 
 //esto da vuelta todo el string pero acá es por palabra --  !hcum os uoy evol I


var espejo = '';

for(let i = str.length -1; i >= 0; i--) {
      espejo += str[i];
    };
   return ( espejo.split(' ').reverse().join(' '));

   // split divide cadena segun caracter pasado en un array con cada elemento separado, en este 
   // caso separado por espacio. Luego con reverse damos cada elemento vuelta, y luego
   // con join los juntamos en una unica cadena separada por un espacio en este caso

   // otra forma mas compleja de hacer lo mismo

   // let arrayStr = str.split (" ")
  // let nuevoArray = []

   // array.forEach (function (el){
     // let reversed = ''
    // for(let i = el.length -1; i >= 0; i--) {
      // let reversed += el[i]
    //}
    // nuevoArray.push (reversed)
//   })
// return nuevoArray.join (' ')

}




function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var numToStr = numero.toString()
  var capicua = '' ;

for (i = numToStr.length - 1 ; i >= 0 ; i--) {
  capicua = capicua + numToStr.charAt (i)
}
if (numToStr === capicua) {
  return "Es capicua"
}
return "No es capicua"

// otra opción es invocar la funcion anterior que hace lo mismo
// var numSTR = numero.toString()
// var capicua = asAmirror(numSTR) --- aca invoco la función anterior pero pasando como parametro el numero 
// if (numSTR === capicua) {
//   return "Es capicua"
// }
// return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var newCadena = ''

  for (var i = 0 ; i < cadena.length; i++) {
  if (cadena.charAt (i) !== "a" && cadena.charAt (i) !== "b" && cadena.charAt (i) !== "c") {
    newCadena = newCadena + cadena.charAt(i)
  }
}
return newCadena

// otra manera de resolver

// var newCadena = cadena.replace ('a', '').replace ('b', '').replace ('c', '')
// return newCadena

// el replace busca el primer elemento y sustituye por el elemento que pones en el 
// segundo argumento. En este caso es un caracter vacio así que basicamente lo elimina

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  // el sort no funciona porque ordena alfabeticamente

  
 for (var i = 0 ; i < arr.length; i++) {
       var aux = arr[i]
       var j = i - 1

       while (j >= 0 && aux.length < arr[j].length){
         arr [j+1] = arr[j]
            j--
       }
       arr[j+1] = aux
 }
 return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var arr = []

  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
if (arreglo1[i] === arreglo2 [j]) {
  arr.push (arreglo1[i])
}
    }
    
  }
  return arr
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

