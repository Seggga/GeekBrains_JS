/*

4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
    1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
    2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0

*/
"use strict";

// инициализация массива с данными о товарах
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

// вывод в консоль начального массива данных
console.table(products);

// создаем массив с данными о товарах, где имеются фотографии
// фильтр по двум условиям
//     1) у единицы товара имеется свойство photos
//     2) длина массива photos больше нуля
let productsWithImages = products.filter( product => ( product.hasOwnProperty("photos") ) && (product.photos.length > 0) );

// вывод в консоль отфильтрованного массива
console.table(productsWithImages);




// сортировка массива с данными о товарах
//     сортировка по цене
products.sort( (a, b) => a.price - b.price );

// вывод в консоль отсортированного массива
console.table(products);