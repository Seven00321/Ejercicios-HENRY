// Stack o Pila
function Stack() {

    // Propiedad
    this.array = [];

    // Metodos

    // Metodo push
    Stack.prototype.push = function(value){
        this.array.push(value);
    };

    // Metodo pop
    Stack.prototype.pop = function(){
        return this.array.pop();
    };

    // Metodo size
    Stack.prototype.size = function(){
        return this.array.length;
    };

    // Metodo imprimir
    Stack.prototype.imprimir = function(){
        this.array.forEach(function (item){
            console.log(item);
        })
    }
}



var pila = new Stack();

pila.push('first');
pila.push('second');
pila.push('third');
pila.imprimir();
console.log(pila.pop());

pila.size();

console.log("   ");

console.log(pila.pop());
pila.imprimir();