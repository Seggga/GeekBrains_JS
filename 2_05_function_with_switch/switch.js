/*

5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.

*/


"use strict";


/**
 * Функция складывает два переданных числа
 * @param {number} a первое слагаемое
 * @param {number} b второе слагаемое
 * @returns {number} результат сложения
 */
function add (a, b) {

    return a + b
}

/**
 * Функция производит вычитание второго переданного числа из первого
 * @param {number} a уменьшаемое
 * @param {number} b вычитаемое
 * @returns {number} результат вычитания (разность)
 */
function sub (a, b) {

    return a - b
}

/**
 * Функция перемножает два переданных числа
 * @param {number} a множимое
 * @param {number} b множитель
 * @returns {number} результат умножения (произведение)
 */
function mul (a, b) {
    
    return a * b
}


/**
 * Функция делит первое переданное число на второе
 * @param {number} a делимое
 * @param {number} b делитель
 * @returns {number} результат деления (частное)
 */
function div (a, b) {

    return a / b
}





// ввод входных аргументов
let a = parseInt( prompt("Введите первое число: "));
let b = parseInt( prompt("Введите второе число: "));
let func = prompt("Укажите одно из действий: сложение, вычитание, умножение или деление.");

let result;        // переменная для результата арифметического действия
let mathSymbol;    // переменная для знака действия ( + - * / )

// проверка корректности ввода (ожидаем числа)
if ( ( isNaN(a) ) || ( isNaN(b) ) ) {
    
    alert("Необходимо было ввести числа!");

} else {

    // ветвление по выбранному действию
    switch (func) {
        case "сложение":
            result = add( a, b );
            mathSymbol = "+";
            break;
            
        case "вычитание":
            result = sub( a, b );
            mathSymbol = "-";
            break;
    
        case "умножение":
            result = mul( a, b );
            mathSymbol = "*";
            break;
        
        case "деление":
            result = div( a, b );
            mathSymbol = "/";
            break;
            
        default:
            alert("Некорректно указано выбранное действие.");
            result = NaN;
            break;
    }

    if ( ! isNaN(result) ) {

        alert(`${a} ${mathSymbol} ${b} = ${result}`);
    }
    
}
