
const btns = document.querySelectorAll('.question-icon');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const btnss =e.currentTarget.parentElement.parentElement;
        btnss.classList.toggle('show-text')
    })
    
})