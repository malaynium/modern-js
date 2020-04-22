const name = 'john';
const age = '37';
const job = 'Full Stack Developer';
let html


// Without template string (es5)
html = '<ul><li>Name:' + name + '</li><li>Age:' +  age + '</li><li>Job:' + job + '</liv></ul>';

// other old ways
html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' + 
        '<li>Job: ' + job + '</li>' +
        '</ul>';


function hello(){
  return 'hello';
}

// With template string (es6)
html = `
    <ul>
      <li>Name: ${name}</li>
      <li>Age: ${age}</li>
      <li>Jon: ${job}</li>
      <li>${2+2}</li>
      <li>${hello()}</li>
      <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>`;


//  Output
document.body.innerHTML = html;