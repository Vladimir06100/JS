/** ЗАДАЧА 71 - Spread Operator
 *
 * Используя оператор "spread" создайте новый массив
 * Вывод в консоли должен быть таким же как в конце задания
 */

const a = [1, 2]
const b = [4, 5]
const c = [8, 9, 10]
const d = 11

const combinedArray = [0, ...a, 3, ...b, 6, 7, ...c, d]

console.log(combinedArray)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// Original arrays were not changed
console.log(a)
console.log(b)
console.log(c)
