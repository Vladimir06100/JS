/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false) // <-- 3

/** ШАГ 1
 * (true && null)
 *  null
 */

/** ШАГ 2
 * 3 || null || false
 * 3
 */

// console.log(true && null && 10) // <-- null
// console.log(true && 'abc' && 10) // <-- 10

// console.log(10 || false) // <-- 10
