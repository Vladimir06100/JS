/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = 'Bogdan'
const mySurname = 'Stashchuk'
const myProfession = 'Instructor'

// OPTION 1
const personInfo1 =
  'My name is ' + myName + ' ' + mySurname + ' and I am ' + myProfession

console.log(personInfo1)

// OPTION 2
const personInfo2 = `My name is ${myName} ${mySurname} and I am ${myProfession}`

console.log(personInfo2)
