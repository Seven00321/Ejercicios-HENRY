function BinarioADecimal(num) {
    // Determinar variables.
    var totalDigitos = num.length;
    var decimal = 0
 
    // Iterar sobre cada digito del num binario.
    for (var i = 0; i < totalDigitos; i++) {
       var digito = parseInt(num.charAt(i));
       var posicion = totalDigitos - 1 - i;
   
       // Calcular el valor decimal sumando (2^posicion) * digito
       decimal += digito * Math.pow(2, posicion);
    }
 
    return decimal;
 
}


console.log(BinarioADecimal("10"));
console.log(BinarioADecimal("111"));

