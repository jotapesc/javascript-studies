// Create a object of blog posts that contains these following properties
/*
title
message
author
views
commentaries
    [author, message]
isLive
*/

function ObjectBuilder(title, message, author) {
    this.title = title;
    this.message = message;
    this.author = author;
    this.views = 0;
    this.commentaries = [author, message];
    this.isLive = true;
}

let title = "title";
let author = "Gregory";
let message = "this is a message";

let posts = new ObjectBuilder(title, message, author);

console.log(posts);