const searchBtn = document.getElementById('search-button');
const mealList = document.getElementById('meal');


// get the meal list depend on area

function getMealList(){
    let searchInput = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchInput}`)
    .then(response => response.json())
    .then(data => {
        e.preventDefault();
        if(data.meals){
            data.meals.forEach(meal => {
                const mealItem = document.createElement('div')
                mealItem.setAttribute('id', '${meal.idMeal}')
                mealItem.classList.add('meal-item')

                const mealImgContainer = document.createElement('div')
                mealImgContainer.classList.add('meal-img')

                const mealimg = document.createElement("img")
                mealimg.setAttribute('src' , '${meal.strMealThumb}')
                mealimg.setAttribute('alt' , 'meal')
                mealImgContainer.appendChild(mealimg)

                const mealName = document.createElement('div')
                mealName.classList.add('meal-name')

                const headername = document.createElement('h3')
                headername.textContent = '${meal.strMeal}'
                mealName.appendChild(headername)

                mealItem.appendChild(mealImgContainer)
                mealItem.appendChild(mealName)
            });
        } else{
            html = "Sorry, we didn't find any meal by this area!";
            mealList.classList.add('notFound');
        }

        mealList.appendChild(mealItem)
}   )};
    