/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15

const myObject = {
  x: 10,
  y: true,
}

myObject.z = 'abc'

delete myObject.x

let newVariable

newVariable = 30 + 5

console.log(newVariable)

if (newVariable > 10) {
  console.log(`${newVariable} больше 10`)
}
