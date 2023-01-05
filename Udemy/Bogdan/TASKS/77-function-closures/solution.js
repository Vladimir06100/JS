/** ЗАДАЧА 77 - Замыкания
 *
 * 1. Создайте функцию "createGreeting", внутри которой создайте:
 *  - переменную "greetingString" с значением "Hey, this is"
 *    (объявите ее используя "let")
 *  - функцию "greet" с одним параметром, которая должна возвращать
 *    строку-приветствие на основании "greetingString" и параметра,
 *    например, "Hey, this is Bob"
 *  - функцию "changeGreeting" с одним параметром, которая должна
 *    изменять значение переменной "greetingString"
 *
 * 2. Функция "createGreeting" должа вернуть объект с двумя методами:
 *  - greet
 *  - changeGreeting
 */

const createGreeting = () => {
  let greetingString = 'Hey, this is'

  function greet(name) {
    return `${greetingString} ${name}`
  }

  function changeGreeting(newGreeting) {
    greetingString = newGreeting
  }

  return {
    greet,
    changeGreeting,
  }
}

const greeting1 = createGreeting()

console.log(greeting1.greet('Bob'))
// Hey, this is Bob

greeting1.changeGreeting('Good Morning from')

console.log(greeting1.greet('Emily'))
// Good Morning from Emily

greeting1.changeGreeting('Good Evening')

console.log(greeting1.greet('Emily'))
// Good Evening Emily

/* ____________  */

const greeting2 = createGreeting()

console.log(greeting2.greet('Emily'))
// Hey, this is Emily
