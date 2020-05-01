// execute load data button when click button
document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  //Create xhr Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

  // optional - used for spinner/loaders
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);   
  }


  xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      //console.log(this.responseText);
    document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.send();

  // http status:
  // 200: "ok"
  // 403: "forbidden"
  // 404: "not found" 

  xhr.onerror = function () {
    console.log('Request error...')
  }

}