
/**
 * @type {string | number}
 */
let dato = "hola"

/**
 * @type {number}
 */
let soyunnumero = 123

/**
 * @type {boolean}
 */
let cualquiera = false

/**
 * @type {null | string}
 */
let miVariable


/**
 * @typedef {object} person
 * @property {number} id
 * @property {number} edad
 * @property {string} nombre
 * @property {string} apellido
 * @property {boolean} estudiante
 */


/**
 * @type {person}
 */
let persona = {
    id: 1,
    edad: 25,
    nombre: "Juan",
    apellido: "Perez",
    estudiante: true
}

let personas = [persona]

/**
 * Con esta función vamos a sumar
 * @param {number} a Primer parametro
 * @param {number} b Segundo paramentro
 * @returns {number}
 */
export const sumar = (a, b) => a + b

/**
 * Function para buscar una persona
 * @param {number} id Recibe un id
 * @returns {Promise<person | undefined>} retorna una persona o no
 */
export const getPerson = async (id) => {
    return personas.find(persona => persona.id === id)
}

getPerson(1).then(res => console.log(res))