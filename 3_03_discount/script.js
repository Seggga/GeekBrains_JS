/*

3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%, можете использовать метод forEach https://mzl.la/1AOMMWX :

*/

"use strict";

// массив, содержащий данные о продуктах
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

// вывод текущего массива
console.table( products );

// изменение элементов массива - применение скидки 15%
products.forEach( function( product ) {
    product.price *= 0.85;
});

// вывод измененного массива
console.table( products );