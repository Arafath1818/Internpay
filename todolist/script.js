const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');  
function add(){
    if(inputBox.value==="") {
     alert("Please enter something");   
    }
    else{

        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
}