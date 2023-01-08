/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false)

// шаг 1 получаем true && null = null
// шаг 2 3 || null || false = 3


// или выведено правда


console.log(true && 'abc' && 10) // 10