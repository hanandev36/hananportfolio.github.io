const searchBtn = document.getElementById('btn');
let meal = document.getElementById('meal')
let mealDetails =document.querySelector('.meal-details-content')
const clozBtn =document.getElementById('cloz-btn')

searchBtn.addEventListener('click', getmealList);
meal.addEventListener('click',getMealRecipe)
clozBtn.addEventListener('click',function(){
    mealDetails.parentElement.classList.remove('show-recipe')

})

 function getmealList(){
    let searchText = document.querySelector('.search').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`)
    .then(response =>response.json())
    .then(data => { 
        let html ='';
        if(data.meals){
            data.meals.forEach(meal =>{
                html +=`
                <div class="meal-item" data-id = "${meal.idMeal}">
                        <div class="meal-img">
                            <img src="${meal.strMealThumb}" alt="Food-Img">
                        </div>
                        <div class="food-name">
                            <h3>"${meal.strMeal}"</h3>
                            <a href="#" class="recipe-btn">Get Recipe</a>
                        </div>
                    </div>`
            })
            meal.classList.remove('not')
        }else{
        
            html="sorry we didn't found any meal!";
            meal.classList.add('not');
        }
        meal.innerHTML = html;
    })
}

function getMealRecipe(e){
    e.preventDefault()
    if(e.target.classList.contains('recipe-btn')){
        let mealItem =e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}
        `)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals))
    }
}
function mealRecipeModal(meal){
    console.log(meal)
    meal = meal[0]
    let html =`
    <h2 class="recipe-title">${meal.strMeal}</h2>
                    <p class="recipe-category">${meal.strCategory}</p>
                    <div class="recipe-instruction">
                        <h3>Instructions:</h3>
                        <p>${meal.strInstructions}</p>
                    </div>
                    <div class="recipe-meal-img">
                        <img src="${meal.strMealThumb}" alt="recipe-img">
                    </div>
                    <div class="recipe-link">
                        <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
                    </div>`
                    mealDetails.innerHTML = html;
                    mealDetails.parentElement.classList.add('show-recipe')
}