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

function ObjectBuilder(title, message, author, views, commentaries, isLive) {
    this.title = title;
    this.message = message;
    this.author = author;
    this.views = views;
    this.commentaries = commentaries;
    this.isLive = isLive;
}

let author = "Gregory";
let message = "this is a message";

let posts = new ObjectBuilder("title", message, author, 100, [author, message], true);

console.log(posts);