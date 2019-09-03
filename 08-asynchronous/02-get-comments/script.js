/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let posts, comments;

    // when you click a button
document.getElementById("run").addEventListener("click", function(){

    window.lib.getPosts(function(error, articles){

        posts = articles; //array van 9
        //console.log(posts);

        posts.forEach(function(post) {

            window.lib.getComments(null, function(error, pushComments){

                comments = pushComments[post.id];

                if ( comments !== undefined) {
                    post.comment = comments; //we create the property called "comment" and assign the Pushed comments to it
                }
                console.log(post);

            });


        });


    });



});




})();






/*
let posts, comment; // we dont know yet if its an array

// click button

document.getElementById("run").addEventListener("click", function () {

    //call the getPosts function

    window.lib.getPosts(function (error, articles) {
        posts = articles; //an array of articles
        posts.forEach(function (post) { //for each recovered article call the getComments function
            //+ add the comments property (if it has one, otherwise nothing)

            window.lib.getComments(null, function (error, Comments) {
                //check callbacks.js > comments > has two parameters/ Comments ipv articles

                comment = Comments[post.id];
                if (comment !== undefined) { //if comment exists > add comment to post
                    post.comment = comment;
                    console.log(post);
                }
            })
        })
    })
})*/
