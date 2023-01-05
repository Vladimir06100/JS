/** ЗАДАЧА 64 - Hoisting
 *
 * Измените код, чтобы исправить ошибку после строки 13.
 *
 * Ошибка после строки 21 все равно должна генерироваться.
 * Почему ошибка после строки 21 возникает?
 */

const a = 5
const b = 10

if (b > a) {
  c = a + b + c
  // ДО: ReferenceError: Cannot access 'c' before initialization
  // ПОСЛЕ: Нет ошибки
  let c = 2
  console.log(c)
  // 17
}

console.log(c)
// Uncaught ReferenceError: c is not defined
