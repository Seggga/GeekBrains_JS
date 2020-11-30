/*

1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который принимает
параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
объект-прототип (как объект transport в уроке).

*/

"use strict";

/**
 * Функция-конструктор для создания объектов товаров
 * @param {string} название товара
 * @param {number} цена товара
 * @returns {object} объект со {name, price}
 */
function Product (name, price) {
    this.name = name;
    this.price = price;
}

/**
 * функция-метод для объектов типа Product
 * уменьшает цену (свойство price) на 25%
 */
Product.prototype.make25PercentDiscount = function() {
    this.price *= 0.75;
}

// создание продуктв по стандарту ES5
let product1 = new Product('сметана', 70);
console.table(product1);

// применяем скидку 25%
product1.make25PercentDiscount();
console.table(product1);


//
//    ES6
//
class ProductClass {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *= 0.75;
    }
}

// создание продуктв по стандарту ES6
let product2 = new ProductClass('хлеб', 50);
console.table(product2);

// применение скидки к товару
product2.make25PercentDiscount();
console.table(product2);

