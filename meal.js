const loadMeals =(searchtext) =>{
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`
fetch(url)
.then(res =>res.json())
.then(data =>DisplyLoad(data.meals))

} 



const DisplyLoad = meals =>{

    const mealContaier =document.getElementById('meal-container');
    mealContaier.innerText = '';
  
    meals.forEach(mail =>{
        console.log(mail);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
                    <img src="${mail.strMealThumb
                    }" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${mail.strMeal}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                     
                      <button  onclick="loadMealsDetails(${mail.idMeal})"type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
                     Details
                        </button>
                  </div>
        `
        mealContaier.appendChild(mealDiv);

    })

   
}


const seachLoad =() =>{
  const searchsText = document.getElementById('search-field').value;
  console.log(searchsText);
  // loadMeals(searchsText);
  loadMeals(searchsText);
}


const loadMealsDetails = idMeal =>{
 const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
 console.log(url)
 fetch(url)
 .then(res =>res.json())
 .then(data =>displayMealDetails(data.meals[0]));

}


const displayMealDetails = meal =>{
  document.getElementById('exampleModalLabel').innerText = meal.strMeal;
  const loadMealsDetails = document.getElementById('ModalLabelBody');
  loadMealsDetails.innerHTML = `
  <img class="img-fluid" src="${meal.strMealThumb}">
  <p>${meal.strInstructions}</p>
  `
};


document.getElementById('but-click').addEventListener('click',function(){
  window.location.href ='walid.html';
  

})







loadMeals('rice');