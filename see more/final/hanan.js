

const rewiews =[{
    id: 1,
    name: 'Asadullah',
    job: 'Backend Developer',
    img: 'cover.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto'
},
{
    id: 2,
    name: 'Muhammad Hammad',
    job: 'Compuer Operator',
    img: 'buggati.jpg',
    text: 'asperiores debitis incidunt, eius earum ipsam cupiditate libero?'
},
{
    id: 3,
    name: 'Kamran Khanh',
    job: 'Full Stack Developer',
    img: 'ferrari.jpg',
    text: 'ipsum dolor sit amet consectetur adipisicing elit. Iusto'
},
{
    id: 4,
    name: 'Muhammad Azlan',
    job: 'UI/UX Designer',
    img: 'pic3.png',
    text: 'Iste, doloremque nihil? earum ipsam cupiditate libero'
}
]

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const text = document.getElementById('info');

const nxtBtn = document.querySelector('.next-btn')
const surpriseBtn = document.querySelector('.random-btn')
const prevBtn = document.querySelector('.prev-btn')

 let currentItem = 4;

 window.addEventListener('DOMContentLoaded',function(){
   
    showMan(currentItem);
 })

 function showMan(person){
     const item = rewiews[person];
    img.src=item.img;
    author.innerText =item.name;
    job.innerText =item.job;
    text.innerText=item.text;
  
  

 }
nxtBtn.addEventListener('click',function(){
currentItem++;
if(currentItem >rewiews.length -1){
    currentItem =0;
}
showMan(currentItem);

});
prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = rewiews.length -1;
    }
    showMan(currentItem);
    
    })

surpriseBtn.addEventListener('click',function(){
    
 currentItem = Math.floor(Math.random()*rewiews.length)
    showMan(currentItem);

})