

function entrada() {
    // entrada de datos 
        
    const cantidad = parseFloat(prompt("ingrese cantidad de dinero que desea invertir en pesos"));
    const dias = parseInt(prompt("ingrese la cantidad de dias que desea mantener su inversion"));


    // llamo a la funcion de validacion
    if (validaciones(cantidad, dias)) {
        alert("por favor ingrese valores numericos validos");
        return;
    }
    //llamo a la funcion plazo fijo y paso los parametros 
    plazoFijo(cantidad, dias);    
    
}


function validaciones(cantidad, dias) {
    // valido que la entrada de datos sea numerica 
    return isNaN(cantidad) || isNaN(dias)

}


function plazoFijo(cantidad, dias) {

    //bloque de codigo a desarrollar
    let interesXDia = 2;
    let aumento = cantidad * (interesXDia / 100);
    let ganancia = dias * aumento;
    let total = ganancia + cantidad;
    //salida de datos 
    const reinvierte = confirm(`El beneficio es de $${ganancia.toFixed(2)} por ${dias} dias , esto suma un total de $${total.toFixed(2)} a su cartera , ¿desea reinvertir su ganancia?`);


    if (reinvierte) {
        confirm("Ha reinvertido su dinero con exito");
        return;

    }
    else {
        alert(`Gracias por usar nuestro simulador, su saldo es de $${total.toFixed(2)}`)
        return;
    }

}

console.log(entrada())