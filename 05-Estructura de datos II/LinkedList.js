/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

// LinkedList o Lista Enlazada
function LinkedList() {
    // Head
    this.head = null;
  }
  
  function Node(value) {
    // Value y next
    this.value = value;
    this.next = null;
  }
  
  // Metodos
  LinkedList.prototype.add = function(value){
    let newNode = new Node(value);
    let current = this.head;
  
    // Validamos si existe un head en la linkedList, de lo contrario asigna un nuevo Head
    if(!current){
        this.head = newNode;
        return newNode;
    }   
    
    while(current.next){
        current = current.next;
    }
  
    current.next = newNode;
    return newNode;
  }
  
  LinkedList.prototype.remove = function(){
    let current = this.head;
    if(!current) return null; // Cuando no tengo nada
    if(!current.next){ // Cuando tengo un solo nodo
        this.head = null;
        return current.value;
    }
  
    while(current.next.next){
        current = current.next;
    }
  
    let aux = current.next.value;
    current.next = null;
    return aux;
  }

