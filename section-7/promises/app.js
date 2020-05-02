// call back function exp
const posts = [
  {title:'Post One', body:'this is post one'},
  {title:'Post two', body:'this is post two'}
];

// use promises to run the getPosts function async
function createPost(post){
  return new Promise(function(resolve, reject){

    setTimeout(function() {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
     
    }, 2000);

  });  
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

// use PROMISES to run createPosts and getPosts function async
createPost({title:'Post There', body:'This is post there'})
.then(getPosts)
.catch(function(err){
  console.log(err);
});




