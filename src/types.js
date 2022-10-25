
/**
 * @type {string}
 */
let nombre = "Hola"

/**
 * @type {number}
 */
let numero = 1234

/**
* @type {boolean}
*/
let boolean = true

/**
* @type {Array<string | number | boolean >}
*/
let array = ["1", 2, true]

/**
* @typedef {object} persona
* @property {number} id
* @property {string} nombre
* @property {boolean} [estudiante]
*/

/**
* @type {persona}
*/
let object = {
    id: 123,
    nombre: 'Pedro',
    estudiante: false
}

/**
 * Esta funcion suma dos numeros
 * @type {function(number, number): number}
 */

/**
 * Esta funcion suma dos numeros
 * @param  {number} a Primer atributo
 * @param  {number} b Segundo atributo
 * @return  {number} Resultado de la suma
 */
const sumar = (a, b) => a + b