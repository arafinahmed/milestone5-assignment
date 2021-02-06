const search = document.getElementById('search');
search.addEventListener('click', function(){
    console.log("okay");
});

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=beef')
.then(res => res.json())
.then(data => {
    const meals = data.meals;
    console.log(data);
    meals.forEach(meal => {
        console.log(meal.strMeal);
        console.log(meal.strMealThumb);
    });
})