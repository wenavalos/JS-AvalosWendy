
//array de personas q solicitaron el prestamo
const personas = ['Pamela', 'Sofia', 'Sebastian', 'Nicolas']

//Se agregan 3 personas más pero como Objetos

function Persona(nombre, apellido, edad, telefono, importe) {
    this.name = nombre
    this.lastName = apellido
    this.age = edad
    this.phone = telefono
    this.money = importe
    this.saludar = function () {
        console.log('Hola ' + this.name + ' gracias por completar tus datos, en breve nos comunicaremos con vos')
    }
}

const persona1 = new Persona('Wendy', 'Avalos', 28, '4747-8888', 200000)
const persona2 = new Persona('Agostina', 'Suarez', 25, '4747-999', 100000)
const persona3 = new Persona('Pilar', 'Vinces', 35, '4747-0000', 150000)

console.log(persona1)
console.log(persona2)
console.log(persona3)

persona1.saludar()
persona2.saludar()
persona3.saludar()

//Agrego los objetos a mi Array
personas.push(persona1)
personas.push(persona2)
personas.push(persona3)


console.log(personas)

