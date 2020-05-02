// call back function exp
const posts = [
  {title:'Post One', body:'this is post one'},
  {title:'Post two', body:'this is post two'}
];

// use callback to run the getPosts function async
function createPost(post, callback){
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }), 1000;
}

// use callback to run createPosts and getPosts function async
createPost({title:'Post There', body:'This is post there'}, getPosts);



