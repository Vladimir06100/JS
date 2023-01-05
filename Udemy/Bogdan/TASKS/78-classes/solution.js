/** ЗАДАЧА 78 - Классы
 *
 * 1. Создайте класс "Fruit"
 *
 * 2. У каждого экземпляра этого класса должно быть
 * два собственных свойства:
 *  - title
 *  - price
 *
 * 3. Также нужно добавить метод "priceInfo", который
 * будет возвращать строку, содержащую название и цену фрукта
 *
 * 4. Выводы в консоли должны совпасть
 */

class Fruit {
  constructor(title, price) {
    this.title = title
    this.price = price
  }

  priceInfo() {
    return `Price of the ${this.title} is ${this.price}$`
  }
}

const apple = new Fruit('Apple', 2)
console.log(apple.priceInfo())
// Price of the Apple is 2$

const orange = new Fruit('Orange', 3)
console.log(orange.priceInfo())
// Price of the Orange is 3$
