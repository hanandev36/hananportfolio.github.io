 const toggle = document.querySelector('.toggle');
 const links = document.querySelector('.links');

 toggle.addEventListener('click',function(){
    links.classList.toggle('show-links');
 })
 toggle.addEventListener('click',function(){
    if(links.classList.contains('links')){
        links.style.display='block';
    }
 })