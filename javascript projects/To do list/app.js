const btn =document.getElementById('btn');
const taskCont =document.getElementById('container-task');
const input =document.getElementById('task');

btn.addEventListener('click',function(){
    // console.log('clicked')
    let task =document.createElement('div')
    task.classList.add('tasks')

    let li = document.createElement('li')
    li.innerText =`${input.value}`;
    task.appendChild(li);

    const checkBtn =document.createElement('button')
    checkBtn.classList.add('check');
    task.appendChild(checkBtn)
    checkBtn.innerHTML='<i class="far fa-check-square"></i>';

    const dltkBtn =document.createElement('button')
    dltkBtn.classList.add('dlt');
    dltkBtn.innerHTML= '<i class="fas fa-trash"></i>';
    task.appendChild(dltkBtn)
    if (input.value === ''){
        alert('insert a task')
    }
    else{
        taskCont.appendChild(task)
    }

    input.value='';
    checkBtn.addEventListener('click',function(){
        checkBtn.parentElement.style.textDecoration = 'line-through'
    })
    dltkBtn.addEventListener('click',function(e){
        let target = e.target;
        target.parentElement.parentElement.remove();
        
    })
})