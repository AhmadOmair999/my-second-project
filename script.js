


let addTaskButton = document.querySelector('#btn');

function getInput() {
    return document.querySelector("#inputbox").value;
}


function clearInput() {
     document.querySelector("#inputbox").value='';
}


let counter = 0;
function addTask() {
    let output = document.querySelector("#available-items");
    if(getInput().length==0){
        return;
    }
    counter++;

        output.innerHTML += '<input  onclick="addLineThrough(\''+counter+'\')" id="c' + counter + '" class="cheak1" type="checkbox">';
    output.innerHTML += '<h3 id="t' + counter + '" class="head3" >' + getInput() +'<button onclick="deleteTask(\''+counter+'\')" class="btn-x">x</button>'+ '</h3>';
    clearInput();
}

function addLineThrough(id) {
    let frontText=document.querySelector('#t'+id);
    let checkBox=document.querySelector('#c'+id);
    if(checkBox.checked){
        frontText.style.textDecoration='line-through rgba(100,100,100,0.7) 2px';
    }else{
        frontText.style.textDecoration='none';
    }
}
function deleteTask(id){
    $('#t'+id).remove();
    $('#c'+id).remove();
    
}