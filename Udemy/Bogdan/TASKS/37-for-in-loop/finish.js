/** ЗАДАЧА 37 - Цикл "for .. in"
 *
 * Внутри цикла "for .. in" перед выводом значения свойства в консоль
 * выполните проверку того, что свойство является
 * собственным свойством объекта
 */

const myObject = {
  name: 'Mike',
  age: 30,
  city: 'London',
};

Object.prototype.country = 'England';
// перебрал все свойства в том числе наследуемые
for (let key in myObject) {
  // hasProperty проверяет является ли ключ личным объектом(свойством)
  if (myObject.hasOwnProperty(key)) {
    console.log(myObject[key]);
  }
}
console.log(myObject);