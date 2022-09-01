const gettingMyMeal = (search) => {
    const url = ` https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => getTheData(data.meals))
}

const getTheData = meals => {
    console.log(meals);
    const mealContainer = document.getElementById('meals-container');
    mealContainer.innerHTML = ``;
    meals.forEach(meal => {
        console.log(meal);
        const creatMeal = document.createElement('div');
        creatMeal.classList.add('col');
        creatMeal.innerHTML = `<div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 300)}</p>
        </div>
    </div>`;
        mealContainer.appendChild(creatMeal);
    })
}

const searchFunction = () => {
    const inputField = document.getElementById('input-field')
    const searchText = inputField.value;
    gettingMyMeal(searchText);
    inputField.value = '';
}
// gettingMyMeal('burger');
