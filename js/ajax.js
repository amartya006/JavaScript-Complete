console.log("Ajax Tutorial");

let fetchButton = document.getElementById("FetchButton");
fetchButton.addEventListener("click", fetchButtonHandler);

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function fetchButtonHandler(){
    

    //Instantiate an xhr object
    let xhr = new XMLHttpRequest();

    //Run it on Every State Change
    // xhr.onreadystatechange= function(){
    //     console.log("State: ", xhr.readyState);
    // }

    //open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/5', true);
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    

    //What to do on Progress(optional) (tracking the Progress)
    xhr.onprogress =  function(){
        console.log("Getting things Done");
    }

    // What to do after geting Response
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        } else{
            console.log("Some Error Occured");
        }
    }

    //Send the Request
    params = `{"name":"test123","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("Keep doing things till Then");
}

function popHandler(){
     //Instantiate an xhr object
     let xhr = new XMLHttpRequest();

    
 
     //open the object
     xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
 
     // What to do after geting Response
     xhr.onload = function(){
         if(this.status === 200){
             let obj = JSON.parse(this.responseText);
             console.log(obj);
             let list = document.getElementById('list');
             for(key in obj){
                list.innerHTML += `
                <li> ${obj[key].userId} </li>
                <li> ${obj[key].id} </li>
                <li> ${obj[key].title} </li>
                <li> ${obj[key].completed} </li>
                <br/>`
             }
             
         } else{
             console.log("Some Error Occured");
         }
     }
 
     //Send the Request
     
     xhr.send();
 
     console.log("Keep doing things till Then");
}