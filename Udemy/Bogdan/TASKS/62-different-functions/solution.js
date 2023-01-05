/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

// // Function can be called before declaration
// console.log(firstFunction(2, 3))

function firstFunction(a, b) {
  return a + b
}

// // We can assign new value
// firstFunction = '123'
// console.log(firstFunction)

// // Cannot access 'secondFunction' before initialization
// secondFunction(2, 7)

const secondFunction = function (a, b) {
  return a + b
}

// // New value can't be assigned
// secondFunction = true

console.log(firstFunction(2, 5))
console.log(secondFunction(5, 10))
