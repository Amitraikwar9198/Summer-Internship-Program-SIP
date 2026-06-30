let editItem = null;

function addTask() {

    let input = document.getElementById("task");
    let text = input.value;

    if(text=="") return;

    if(editItem){
        editItem.firstChild.textContent=text;
        editItem=null;
    }else{

        let li=document.createElement("li");

        li.appendChild(document.createTextNode(text));

        let edit=document.createElement("button");
        edit.innerHTML="Edit";

        edit.onclick=function(){
            input.value=text;
            editItem=li;
        };

        let del=document.createElement("button");
        del.innerHTML="Delete";

        del.onclick=function(){
            li.remove();
        };

        li.appendChild(edit);
        li.appendChild(del);

        document.getElementById("list").appendChild(li);
    }

    input.value="";
}