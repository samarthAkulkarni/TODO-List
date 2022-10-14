var i = 0

function add(){


    

    var todo = document.getElementById('todo-user').value;
    var htmlcode = `
                        <td class="task-${i}">${todo}</td>
                        <td><button class="del" id="${i}" >Delete</button></td>
                    `

    if (todo === ''){
        alert("Please enter your task!")
    }
    
    else{
        var newtag = document.createElement('tr')
        newtag.innerHTML = htmlcode
        var table_body = document.getElementById('table_body')
        table_body.appendChild(newtag)
        var del = document.getElementById(i)
        del.addEventListener('click',()=>{
            table_body.removeChild(newtag)

        })
        i += 1;
    }
}



