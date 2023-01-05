/** ЗАДАЧА 29 - Строгий режим
 *
 * 1. Исправьте ошибку, которая возникает при включенном строгом режиме
 *
 * 2. Что будет, если отключить строгий режим?
 */

'use strict'

function myFunction() {
  const a = 2
  return a
}

myFunction()

// // Переменная "a" доступна только внутри функции
// console.log(a)
// // ReferenceError: a is not defined
