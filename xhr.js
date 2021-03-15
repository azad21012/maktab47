const url = "https://5dafece0f2946f001481da98.mockapi.io/api/v1/books"
// const xhr = new XMLHttpRequest();
// xhr.open("GET", url);
// xhr.send();

// console.log("UNSET",XMLHttpRequest.UNSENT)
// console.log("OPENED: ",XMLHttpRequest.OPENED)
// console.log("HEADERS_RECEIVED",XMLHttpRequest.HEADERS_RECEIVED)
// console.log("LOADING",XMLHttpRequest.LOADING)
// console.log("DONE",XMLHttpRequest.DONE)

// xhr.onreadystatechange = function () {
//   // In local files, status is 0 upon success in Mozilla Firefox

//   if(xhr.readyState === XMLHttpRequest.DONE) {
//     var status = xhr.status;
//     if (status === 0 || (status >= 200 && status < 400)) {
//       // The request has been completed successfully
//       console.log(xhr.responseText);
//     } else {
//       // Oh no! There has been an error with the request!
//     }
//   }
// };


//-------------------------------------------------------


function sendApi(url,method="GET",data=null) {
  return new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    console.log(data,"data")
    if(method==="POST"){
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    }
    xhr.send(data);

    xhr.onreadystatechange = function () {
      // In local files, status is 0 upon success in Mozilla Firefox
    
      if(xhr.readyState === XMLHttpRequest.DONE) {
        var status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          // The request has been completed successfully
          resolve(xhr.responseText);
        } else {
          reject("ERROR!")
          // Oh no! There has been an error with the request!
        }
      }
    };
  }) 
}

const data = {title:"test",pages:45,writer:"ali"}
const payload = JSON.stringify(data)
// sendApi(url,).then(res=>console.log(res)).catch(e=>console.log(e))
// sendApi(url,"POST",payload).then(res=>console.log(res)).catch(e=>console.log(e))



//-----------------------------------------
fetch(url)
  .then(function(data) {
    data.json().then(data=>console.log(data))
    })
  .catch(function(error) {

  });

  const myHeader = new Headers({"Content-Type": "application/json;charset=UTF-8"})
  // myHeader.append()
  
  var request = new Request(url, {
      method: 'POST',
      body: payload,
      headers: new Headers()
  });
  
  fetch(request)
  .then(function(data) {
    console.log(data)
      // Handle response we get from the API
  }).catch(e=>console.log(e))