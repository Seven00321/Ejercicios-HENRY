function DecimalABinario(num) {
    // Definir variables
    var cociente = num;
    var resto;
    var nroBinario = "";

    // Determinar el nro binario por divisiones sucesivas
    while(cociente > 0){
        resto = cociente % 2;
        cociente = Math.floor(cociente/2);

        // Construir el numero binario en si
        nroBinario = resto + nroBinario;
    }

    // Si num era 0, el binario es tambien 0
    if(nroBinario === ""){
        nroBinario = "0";
    }

    return nroBinario;
}

console.log(DecimalABinario('4'));
console.log(DecimalABinario('7'));
console.log(DecimalABinario('13'));