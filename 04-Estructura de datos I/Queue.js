/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa 
es el primero que se quita. Definir los siguientes métodos:

  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

// Queue o Cola
function Queue() {

    // Propiedad
    this.array = [];

    // Metodos

    // Metodo enqueue
    Queue.prototype.enqueue = function(value){
        this.array.push(value);
    };

    // Metodo dequeue
    Queue.prototype.dequeue = function(){
        return this.array.shift();
    };

    // Metodo size
    Queue.prototype.size = function(){
        return this.array.length;
    };

    // Metodo imprimir
    Queue.prototype.imprimir = function(){
        this.array.forEach(function (item){
            console.log(item);
        })
    }
}



var cola = new Queue();

cola.enqueue('first');
cola.enqueue('second');
cola.enqueue('third');
cola.imprimir();
console.log(cola.dequeue());

cola.size();

console.log("   ");

console.log(cola.dequeue());
cola.imprimir();