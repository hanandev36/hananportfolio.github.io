 const x_Class='x';
const circle ='circle';
let circleturn
const winComb = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const cell = document.querySelectorAll('[data-cell]')
const board = document.querySelector('#board')
const win_Msg = document.querySelector('[data-win-msg]')
const msg = document.querySelector('#msg')
const btn = document.getElementById('btn');

btn.addEventListener('click',startgame)

startgame()
function startgame(){
    circleturn = false
    cell.forEach(cell =>{
        cell.classList.remove(x_Class)
        cell.classList.remove(circle)
        cell.removeEventListener('click',handleClick)
        cell.addEventListener('click', handleClick,{once: true})
        
        
    })
    msg.classList.remove('show')

}


function handleClick(e){
    const cell =e.target;
    const currentClass = circleturn ? circle : x_Class;
    markplace(cell,currentClass)
    if (checkwin(currentClass)){

        endgame(false)
    } 
    else if (isDraw()){
        endgame(true)
    }
    else{
        swapturn()
    
    }
   
    
}
function endgame(draw){
    if(draw){
        win_Msg.innerHTML ='Draw!'

    }
else{
    win_Msg.innerHTML =`${circleturn ? "Hanan's" : "Azlan's" } Wins!`

}{
    msg.classList.add('show')
}}
function isDraw(){
    return [...cell].every(cell =>{
        return cell.classList.contains(x_Class) || cell.classList.contains(circle)
    })
}

function markplace(cell,currentClass){
    cell.classList.add(currentClass)
}
function checkwin(currentClass){
    return winComb.some(Comb =>{
        return Comb.every(index =>{
            return cell[index].classList.contains(currentClass)
        })
    })
}






function swapturn(){
    circleturn =! circleturn;
}

// function boardHoverClass(){
// board.classList.remove(circle);
// board.classList.remove(x_Class);
// if(circleturn){
//     board.classList.add(circle)
// }
// else{
//     board.classList.add(x_Class)
// }

// }