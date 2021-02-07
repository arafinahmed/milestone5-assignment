const searchBtn = document.getElementById('searchBtn');
const allMeals = document.getElementById('all-meals');
searchBtn.addEventListener('click', function () {
    const key = document.getElementById('search-text').value;
    loadData(key);
});

const loadData = (key) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${key}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const meals = data.meals;
            console.log(data);
            meals.forEach(meal => {
                const div = document.createElement('div');
                div.className = "single-meal";
                const innerHtml = `
                <img src="${meal.strMealThumb}" alt="" class="img-fluid">
                <h3 class="text-center">${meal.strMeal}</h3>
                `;
                div.innerHTML = innerHtml;
                allMeals.appendChild(div);
            });
        })
}