/*

2. Выведите в консоль значения, указанные рядом с комментариями:

*/
"use strict";

const post = {
    author: "John", //вывести этот текст  #1
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число #2
            }
        },
        {
            userId: 5, //вывести это число #3
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст #4
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

// вывод автора поста #1
console.log( "Автор поста: " + post.author );

// вывод кол-ва дислайков по первому комментарию #2
console.log( "кол-во дислайков по первому комменту: " + post.comments[0].rating.dislikes );

// вывод ID автора второго комментария #3
console.log( "ID автора второго комментария: " + post.comments[1].userId );

// вывод текста второго комментария #4
console.log( "текст второго комментария: " + post.comments[1].text );