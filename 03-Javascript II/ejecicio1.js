/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */

function counter() {
    // Definir contador
    let count = 0;
  
    // Funcion increment
    function incrementar(){
      count++;
      return count;
    }
  
    // Retornar la funcion interna
    return incrementar;
}

const counterOne = counter();
const counterTwo = counter();

counterOne();
console.log(counterTwo);