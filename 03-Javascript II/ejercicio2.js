/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */

  function cacheFunction(cb) {
    // Definir objeto
    let cache = {};

    // Verificar si dicho proceso se realizo
    return function (...args){
        // Creamos una clave única basada en los argumentos
        const key = args.join(',');

        // Verificamos si ya hemos calculado y almacenado el resultado en la memoria caché
        if (cache.hasOwnProperty(key)) {
        console.log('Recuperando resultado de la memoria caché para', args);
        return cache[key];
        } else {
        // Si no está en la memoria caché, calculamos el resultado llamando al callback
        const result = cb(...args);

        // Almacenamos el resultado en la memoria caché para futuras referencias
        cache[key] = result;

        console.log('Calculando y almacenando en la memoria caché para', args);

        return result;
        }
    }

    // Realizar la funcion interna
    
  }