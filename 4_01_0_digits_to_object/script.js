/*

1. (это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на
вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
 units: 5, //это единицы
 tens: 4, //это десятки
 hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.


*/


"use strict";


/**
 * Функция создает объект, составленный из трех свойств: сотни, десятки и единицы.
 * в случае некорректного ввода выдается сообщение об ошибке
 * 
 * @param {string}  строка, введенная пользователем (ожидается целое число от 0 до 999)
 * @returns {object}  объект {units, tens, hundreds}
 */
function makeObject( userNumber ) {

    let intNumber = parseInt(userNumber);

    if ( intNumber != userNumber ) {
        console.log("Ошибка! Некорректный ввод.");
        return {};
    } 

    if ( intNumber < 0 ) {
        console.log("Ошибка! Вы ввели отрицательное число.");
        return {};
    }

    if ( intNumber > 999 ) {
        console.log("Ошибка! Вы ввели слишком большое число.");
        return {};
    }

    let units = intNumber % 10;
    let tens = Math.floor(intNumber / 10) % 10;
    let hundreds = Math.floor(intNumber / 100);

    let digitObject = new Digit(units, tens, hundreds);

    return digitObject;

 /*   
    Топорный способ

    {
        units: intNumber % 10,
        tens:  Math.floor(intNumber / 10) % 10,
        hundreds: Math.floor(intNumber / 100)
    }
*/

}

/**
 * функция-конструктор объектов {units, tens, hundreds}
 * @param {number} единицы 
 * @param {number} десятки
 * @param {number} сотни 
 */
function Digit(units, tens, hundreds) {
    this.units = units;
    this.tens = tens;
    this.hundreds = hundreds;
}

let aNumber = prompt("Введите целое число от 0 до 999.");

console.log( makeObject( aNumber ) );