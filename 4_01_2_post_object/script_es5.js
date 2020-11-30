/*

1.2  Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),  
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты 
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта. 
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с 
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться 
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post. 
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству 
highlighted значение true.

*/

"use strict";

//
//   ES 5
//

/**
 * функция конструктор для создания объектов - постов
 * (author, text, date)
 * @param {string} author - автор поста 
 * @param {string} text - текст поста
 * @param {date} date - дата публикации
 * @returns  {author, text, date}
 */
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

/**
 * функция-метод меняет значение поля text объекта
 * @param {string} newText новый текст
 */
Post.prototype.edit = function(newText) {
    this.text = newText;
}

// создание объекта Post и вызов метода
let currentDate = new Date();
let post1 = new Post("Альберт Эйнштейн", "Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно.", currentDate);
post1.edit("Стремитесь не к успеху, а к ценностям, которые он дает.");






/**
 * функция конструктор для создания объектов - постов. Наследует свойства из конструктора Post, добавляет свое highlighted.
 * (author, text, date)
 * @param {string} - автор поста 
 * @param {string} - текст поста
 * @param {date} - дата публикации
 * @returns  {object} - {author, text, date, highlighted}
 */
function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

// наследование методов из Post 
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

// метод для задания подсветки
AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

// создание объекта AttachedPost и вызов методов
currentDate = new Date();
let post2 = new AttachedPost("Марк Твен", "Хорошие друзья, хорошие книги и спящая совесть – вот идеальная жизнь.", currentDate);
post2.edit("Бросить курить легко. Я сам бросал раз сто.");
post2.makeTextHighlighted();

