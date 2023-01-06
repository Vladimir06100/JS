"use strict";
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
let myName = 'Vladimir'
let mySurname = 'Sinkevitch'
let myProfession = 'developer'

const personInfo = 'my name is ' + myName + ' ' + mySurname + ' and I am ' + myProfession

console.log(personInfo)
// option 2

const personInfo2 = `My name is ${myName} ${mySurname} and I am ${myProfession}`
console.log(personInfo2)

