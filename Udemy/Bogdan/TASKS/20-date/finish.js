/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */

const currentDate = new Date()
// получаем значение времени в миллисекундах
const currentTimeInMs = currentDate.getTime()

console.log(currentTimeInMs)