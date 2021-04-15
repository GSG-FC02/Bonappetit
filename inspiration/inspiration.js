// Pop JS
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
// End

// API js
let searchBtn=document.getElementById('recipe-btn')
let recipeName=document.getElementById('recipe-name')
let instruction=document.getElementById('instruction')
let Ingredients=document.getElementById('Ingredients') // ul 
let measure=document.getElementById('measure')

searchBtn.onclick = (e)=>{
    e.preventDefault();
    let url ="https://www.themealdb.com/api/json/v1/1/random.php"
  fetch(url)
  .then(response=>{
    return response.json()  
})
.then(printData=>{
     for ( i = 0; i < printData.meals.length; i++) {
        recipeName.innerText=printData.meals[i].strMeal
        instruction.innerText=printData.meals[i].strInstructions

        // Create List Item 
        let strIngredient1 = document.createElement('li')
        let strIngredient2 = document.createElement('li')
        let strIngredient3 = document.createElement('li')
        let strIngredient4 = document.createElement('li')
        let strIngredient5 = document.createElement('li')
        let strIngredient6 = document.createElement('li')
        let strIngredient7= document.createElement('li')
        let strIngredient8= document.createElement('li')
        let strIngredient9= document.createElement('li')
        let strIngredient10= document.createElement('li')
        // Set class for list item 
        strIngredient1.setAttribute("class", "Ingredient-item")
        strIngredient2.setAttribute("class", "Ingredient-item")
        strIngredient3.setAttribute("class", "Ingredient-item")
        strIngredient4.setAttribute("class", "Ingredient-item")
        strIngredient5.setAttribute("class", "Ingredient-item")
        strIngredient6.setAttribute("class", "Ingredient-item")
        strIngredient7.setAttribute("class", "Ingredient-item")
        strIngredient8.setAttribute("class", "Ingredient-item")
        strIngredient9.setAttribute("class", "Ingredient-item")
        strIngredient10.setAttribute("class", "Ingredient-item")
        // Append list item  to ul 
        Ingredients.appendChild(strIngredient1)
        Ingredients.appendChild(strIngredient2)
        Ingredients.appendChild(strIngredient3)
        Ingredients.appendChild(strIngredient4)
        Ingredients.appendChild(strIngredient5)
        Ingredients.appendChild(strIngredient6)
        Ingredients.appendChild(strIngredient7)
        Ingredients.appendChild(strIngredient8)
        Ingredients.appendChild(strIngredient9)
        Ingredients.appendChild(strIngredient10)
        //  set values for list item 
        strIngredient1.innerText=printData.meals[i].strIngredient1
        strIngredient2.innerText=printData.meals[i].strIngredient2
        strIngredient3.innerText=printData.meals[i].strIngredient3
        strIngredient4.innerText=printData.meals[i].strIngredient4
        strIngredient5.innerText=printData.meals[i].strIngredient5
        strIngredient6.innerText=printData.meals[i].strIngredient6
        strIngredient7.innerText=printData.meals[i].strIngredient7
        strIngredient8.innerText=printData.meals[i].strIngredient8
        strIngredient9.innerText=printData.meals[i].strIngredient9
        strIngredient10.innerText=printData.meals[i].strIngredient10

        // measure
        // Create mesuare List Item 
        let strMeasure1 = document.createElement('li')
        let strMeasure2 = document.createElement('li')
        let strMeasure3 = document.createElement('li')
        let strMeasure4 = document.createElement('li')
        let strMeasure5 = document.createElement('li')
        let strMeasure6 = document.createElement('li')
        let strMeasure7= document.createElement('li')
        let strMeasure8= document.createElement('li')
        let strMeasure9= document.createElement('li')
        let strMeasure10= document.createElement('li')
        // Set class for list item 
        strMeasure1.setAttribute("class", "measure-item")
        strMeasure2.setAttribute("class", "measure-item")
        strMeasure3.setAttribute("class", "measure-item")
        strMeasure4.setAttribute("class", "measure-item")
        strMeasure5.setAttribute("class", "measure-item")
        strMeasure6.setAttribute("class", "measure-item")
        strMeasure7.setAttribute("class", "measure-item")
        strMeasure8.setAttribute("class", "measure-item")
        strMeasure9.setAttribute("class", "measure-item")
        strMeasure10.setAttribute("class", "measure-item")
        // Append list item  to ul 
        measure.appendChild(strMeasure1)
        measure.appendChild(strMeasure2)
        measure.appendChild(strMeasure3)
        measure.appendChild(strMeasure4)
        measure.appendChild(strMeasure5)
        measure.appendChild(strMeasure6)
        measure.appendChild(strMeasure7)
        measure.appendChild(strMeasure8)
        measure.appendChild(strMeasure9)
        measure.appendChild(strMeasure10)
        //  set values for list item 
        strMeasure1.innerText=printData.meals[i].strMeasure1
        strMeasure2.innerText=printData.meals[i].strMeasure2
        strMeasure3.innerText=printData.meals[i].strMeasure3
        strMeasure4.innerText=printData.meals[i].strMeasure4
        strMeasure5.innerText=printData.meals[i].strMeasure5
        strMeasure6.innerText=printData.meals[i].strMeasure6
        strMeasure7.innerText=printData.meals[i].strMeasure7
        strMeasure8.innerText=printData.meals[i].strMeasure8
        strMeasure9.innerText=printData.meals[i].strMeasure9
        strMeasure10.innerText=printData.meals[i].strMeasure10
    }
})
}