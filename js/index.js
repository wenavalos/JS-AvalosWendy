// agregar el simulador con sus variables
    
let importe = parseInt(prompt('Ingrese el importe a solicitar'))
let cuota = parseInt(prompt('Ingrese la cantidad de cuotas con la que desea abonar el préstamo'))

if (cuota >= 1 && cuota <= 6) {
    let inte = importe * 0.15
    let total = inte + importe
    let c = total / cuota
    alert('El importe SOLICITADO es: $' + importe + '\nEl importe TOTAL a abonar es: $' + total + ' en ' + cuota + ' cuotas de $' + c)

} else if (cuota >= 7 && cuota <= 9) {
    let inte = importe * 0.20
    let total = inte + importe
    let c = total / cuota
    alert('El importe SOLICITADO es: $' + importe + '\nEl importe TOTAL a abonar es: $' + total + ' en ' + cuota + ' cuotas de $' + c)

} else if (cuota >= 10 && cuota <= 12) {
    let inte = importe * 0.30
    let total = inte + importe
    let c = total / cuota
    alert('El importe SOLICITADO es: $' + importe + '\nEl importe TOTAL a abonar es: $' + total + ' en ' + cuota + ' cuotas de $' + c)

} else if (cuota >= 13 && cuota <= 18) {
    let inte = importe * 0.40
    let total = inte + importe
    let c = total / cuota
    alert('El importe SOLICITADO es: $' + importe + '\nEl importe TOTAL a abonar es: $' + total + ' en ' + cuota + ' cuotas de $' + c)

} else if (cuota > 18) {
    let inte = importe * 0.50
    let total = inte + importe
    let c = total / cuota
    alert('El importe SOLICITADO es: $' + importe + '\nEl importe TOTAL a abonar es: $' + total + ' en ' + cuota + ' cuotas de $' + c)

} else {
    alert('ERROR! No se ingresaron los datos solicitados')
}


// Si quiere el prestamo, pedir los datos sino saludar

let prestamo = parseInt(prompt('¿Desea solicitar el préstamo? \nSI: Ingrese 1 \nNO: Ingrese 2'))
const nombre = []
const telefono = []
const valor = []

switch (prestamo) {
    case 1:
        alert('Por favor ingresá los siguientes datos:')
        let name = prompt("Nombre");
        let phone = prompt("Teléfono");
        let money = prompt("Importe a solicitar");
        nombre.push(name);
        telefono.push(phone);
        valor.push(money);

        console.log(name);
        console.log(phone);
        console.log(money);

        alert('Muchas gracias! en breve nos comunicaremos con vos!')
        break;

    case 2:
        alert('Muchas gracias! podes simular tu préstamo las veces que quieras')
        break;
}

const lista = nombre.concat(telefono, valor)
console.log(lista)
