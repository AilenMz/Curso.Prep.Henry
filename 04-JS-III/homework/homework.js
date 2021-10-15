// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array [0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array [array.length - 1] 
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arraymasuno= [];
  for (var i = 0; i < array.length; i++) {
    arraymasuno [i] = array[i] + 1;
    // arraymasuno [0] = array [0] + 1 --- 10 +1 --- 1
    // luego hace arraymasuno [1] = array [1] + 1 --- etc etc

  }
  return arraymasuno;
    // otra opción ------------> 
  //   var arraymasuno= [];
  //   for (var i = 0; i < array.length; i++) {
 //    arraymasuno.push(array[i]+1)
 //     }
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join (' ');
  // .join agarra los elementos de un array y los concatena en una cadena

  // se puede también

  // var frase = '';
  // for (var i = 0; i < palabras.length; i++){
  //   frase = frase + palabras[i] + ' ' 
  // }
  // return frase
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0 ; i < array.length ; i++){
  if (array[i] === elemento) {
    return true;
  }
}
return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (var i = 0; i < numeros.length; i++) {
    suma = suma + numeros [i];
    //puede ser tamb suma += numeros[i]

  //ejemplo suma (0) = 0 + 10 -- ahora suma vale 10
  // en el siguienge suma (10) = 10 + 11 -- ahora suma vale 21 y así hasta el final
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
    suma = suma + resultadosTest [i];
    // igual lógica que al anterior solo que luego a toda la suma se la divide por la cantidad de test 
  }
  return suma/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var maximo = numeros[0];
  for(var i = 1; i < numeros.length; i++) {
    if(numeros[i] > maximo) { 
      maximo = numeros[i];
      // ejemplo el primer [0] del array es 10.
      // if numeros [1] es mayor que maximo, maximo ahora se convierte en el segundo array. Sino retorna el primer maximo
    
    }
  }
  return maximo;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
if (arguments.length < 1) return 0;

var total = 1;
for(var i = 0; i < arguments.length; i++) {
total = total * arguments[i];
//   tecnicamente la misma logica que el anterior, se usa arguments cuando no conoces argumentos de la función 
// total = 1, entonces el primer total 1 = 1 x 4, entonces total pasa a ser 4,
// en el siguiente, total 4 = 4 x 10, entonces total pasa a ser 10 
 }
return total;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var contador = 0;
for (var i = 0; i < arreglo.length; i++) {
  if (arreglo[i] > 18) {
    contador++;
// puede ser tamboen a) contador= contador + 1   o  b) contador += 1

    // si por ejemplo arreglo[0] es 20, contador pasa de 0 a 1; si arreglo [1] es 30, contador pasa a ser 2;
    // si arreglo [2] es 9, contador queda en 2. y así
  }
}
return contador;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return 'Es fin de semana';
   }
   else return 'Es dia Laboral';
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numstr = n.toString ();
  if (numstr.charAt (0) === '9') {
    // si el primer caracter (0) es 9, retorna true
    // .charAt() sirve para devolver el caracter en la posición mencionada
    return true;
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var i =0 ; i < arreglo.length - 1; i++) {
    if(arreglo[i] === arreglo[i+1]){
      return true
    }

    // el arreglo.length - 1 es porque luego igualamos a un arreglo [i+1], sino ponemos el -1 va a pasarse del arreglo
  }
  return false
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var arrayMeses= []

  for(var i= 0; i<array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      arrayMeses.push(array[i]);
    }
  }
  if(arrayMeses.length < 3) {
    // es decir que no estan los 3 meses
    return "No se encontraron los meses pedidos";
  }
  else {
      return arrayMeses;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
 var nuevoarray = []

 for (var i = 0; i < array.length; i++) {
   if (array[i] > 100) {
     nuevoarray.push (array[i]);
   }
 }
 return nuevoarray 
  // misma lógica que el anterior
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
var arraynuevo = [];
var suma = numero;

for (var i = 0; i < 10; i++) {
  suma = suma + 2
  if (suma === i) break

  else
   {
     arraynuevo.push (suma)
      }
    
    }
  if (i<10) {
    return "Se interrumpió la ejecución"
  }
 
return arraynuevo
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
var ArregloNew = [] ;
var suma = numero

for (var i = 0; i < 10; i++) {
  if (i === 5) continue ;
  else {
    suma = suma + 2
    ArregloNew.push (suma)
  }
}
return ArregloNew
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
