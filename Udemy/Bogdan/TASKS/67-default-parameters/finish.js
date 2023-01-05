/** ЗАДАЧА 67 - Параметры функции по умолчанию
 *
 * 1. Ответьте на следующий вопрос:
 *  - Почему в строке 12 мы не можем просто использовать оператор ИЛИ?
 *    mult = mult || 2
 *
 * 2. Перепишите функцию с использованием значения по умолчанию
 * для параметра mult в "multiplyBy"
 */

function multiplyBy(a, mult) {
  mult = mult !== undefined ? mult : 2
  console.log(a * mult)
}

multiplyBy(2)
// 4

multiplyBy(2, undefined)
// 4

multiplyBy(2, 0)
// 0

multiplyBy(5, 10)
// 50
