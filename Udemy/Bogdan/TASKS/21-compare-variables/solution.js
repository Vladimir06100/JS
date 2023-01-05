/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'

// // Вариант 1 конвертации строки в число
// console.log(parseInt('25'))
// console.log(typeof parseInt('25'))

// // Вариант 2 конвертации строки в число
// console.log(+'35')
// console.log(typeof +'35')

console.log(parseInt(myVariable1) <= parseInt(myVariable2))

myVariable1 = '20'
myVariable2 = 100

console.log(parseInt(myVariable1) <= parseInt(myVariable2))
