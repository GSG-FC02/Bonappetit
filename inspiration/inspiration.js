/*API js*/
const searchBtn=document.querySelector(".form-btn")
const contentP=document.querySelector('.page-content')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const header_title =document.querySelector('.header-title')
const Area = document.querySelector('.Area')
const Instructions = document.querySelector('.Instructions')
const Category = document.querySelector('.Category')
const Ingredient = document.querySelector('.Ingredient')
const Measure = document.querySelector('.Measure')
const Youtube = document.querySelector('.Youtube a')
const Source = document.querySelector('.Source a')
searchBtn.addEventListener('click', function s(e){
     e.preventDefault();
     const url =`https://www.themealdb.com/api/json/v1/1/random.php`
     fetch(url)
     .then(response=>{
       return response.json()  
     })
     .then(printData=>{
      e.preventDefault();
  
       console.log('printData',printData)
       const s = printData.meals[0]

   
           header_title.textContent=(s.strMeal)
           Area.textContent=(s.strArea)
           Category.textContent=(s.strCategory)
           Instructions.textContent=(s.strInstructions)
           Ingredient.textContent=(`${s.strIngredient1} , ${s.strIngredient2} , ${s.strIngredient3} , ${s.strIngredient4}, ${s.strIngredient5}, ${s.strIngredient6}, 
           ${s.strIngredient7}, ${s.strIngredient8}, ${s.strIngredient9}, ${s.strIngredient10}, ${s.strIngredient11}, ${s.strIngredient12}, ${s.strIngredient13}
           , ${s.strIngredient14}, ${s.strIngredient15}, ${s.strIngredient16}, ${s.strIngredient17}, ${s.strIngredient18}, ${s.strIngredient19} , ${s.strIngredient20} `)

           Measure.textContent=(`${s.strMeasure1} , ${s.strMeasure2} ,${s.strMeasure3} , ${s.strMeasure4}, ${s.strIngredient5}, ${s.strMeasure6}, 
           ${s.strMeasure7}, ${s.strMeasure8}, ${s.strMeasure9}, ${s.strMeasure10}, ${s.strMeasure11}, ${s.strMeasure12}, ${s.strMeasuret13}
           , ${s.strMeasure14}, ${s.strMeasure15}, ${s.strMeasure16}, ${s.strMeasure17}, ${s.strMeasure18}, ${s.strMeasure19} , ${s.strMeasure20} `)

           Youtube.setAttribute('href',s.strYoutube)
           Source.setAttribute('href',s.strSource)

           const openModalButtons = document.querySelectorAll('[data-modal-target]')
               openModalButtons.forEach(searchBtn => {
                searchBtn.addEventListener('click', () => {
                   const modal = document.querySelector(searchBtn.dataset.modalTarget)
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
               if (modal == null)return
               modal.classList.add('active')
               overlay.classList.add('active') 
              
               
           }
           
           function closeModal(modal) {
               if (modal == null) return
               modal.classList.remove('active')
               overlay.classList.remove('active')
           }  
               

           
       })

   .catch(err => console.log('err',err))// console لطباعة الخطأ داخل ال 
 });