/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */
const myFavoriteSeason = 'summer'
// бинарный оператор с двух сторон значение
console.log(myFavoriteSeason instanceof String)

console.log(typeof myFavoriteSeason)
// так как это метод необходимо вызвать его
const seasonToUpperCase = myFavoriteSeason.toUpperCase()

console.log(seasonToUpperCase)

// пример с классом = экземпляром
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const bob = new Person("Bob", 35);
bob.greet(); // Hi, my name is Bob, and I am 35 years old.
/* Экземпляры (т.е. классы) используются в JavaScript для создания объектов с определенными свойствами и методами. Объекты, созданные с помощью экземпляра (класса), называются экземплярами этого класса.

Например, можно создать экземпляр класса Person с именем bob: */

const myString = String('Vladimir')

console.log(myString instanceof String)
console.log(typeof myString)

console.log(myString.toUpperCase())
