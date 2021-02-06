const search = document.getElementById('search');
const allMeals = document.getElementById('all-meals');
search.addEventListener('click', function(){
    console.log("okay");
});

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=beef')
.then(res => res.json())
.then(data => {
    const meals = data.meals;
    console.log(data);
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.className = "single-meal col-md-3";
        const innerHtml = `
        <img src="${meal.strMealThumb}" alt="" class="img-fluid">
        <h3 class="text-center">${meal.strMeal}</h3>
        
        `;
        div.innerHTML = innerHtml;
        allMeals.appendChild(div);
    });
})