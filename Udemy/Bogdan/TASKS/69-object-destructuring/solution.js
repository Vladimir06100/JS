/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

// // OPTION 1
// const mult = (nums) => {
//   const { x, y, z } = nums

//   return x * y * z
// }

// // OPTION 2
// const mult = ({ x, y, z }) => {
//   return x * y * z
// }

// OPTION 3
const mult = ({ x, y, z }) => x * y * z

const result = mult(objectWithNumbers)
console.log(result)
// 300
