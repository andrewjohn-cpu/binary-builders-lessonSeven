let recipes = [
  {
    id: 1,
    recipeName: "Strawberry Cake",
    recipeImage: "./assets/images/strawberry-cake.jpg",
    recipeIngredient: [
      "400g graham crackers",
      "150g unsalted butters, melted",
      "300g marshmallows",
    ],
    recipePreparation: [
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
    ],
  },
  {
    id: 2,
    recipeName: "Chapati",
    recipeImage: "./assets/images/strawberry-cake.jpg",
    recipeIngredient: [
      "400g graham crackers",
      "150g unsalted butters, melted",
      "300g marshmallows",
    ],
    recipePreparation: [
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
    ],
  },
  {
    id: 3,
    recipeName: "Matoke",
    recipeImage: "./assets/images/strawberry-cake.jpg",
    recipeIngredient: [
      "400g graham crackers",
      "150g unsalted butters, melted",
      "300g marshmallows",
    ],
    recipePreparation: [
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
    ],
  },
];

let recipeListContainer = document.querySelector("#recipe-display-container");
let recipeCard = document.getElementById("card");
let recipeDetailModal = document.querySelector("#myModal");
let recipeCloseModal = document.querySelector("#modal-close");
// recipeCloseModal.onclick = () => {
//   recipeDetailModal.style.display = "none";
// };

function displayAllRecipes() {
  recipes.map((recipe) => {
    let recipeCard = document.createElement("div");
    recipeCard.classList.add("card");
    recipeCard.innerHTML = `
       <img src="${recipe.recipeImage}" clStrawberry Cream Cheesecakeass="card-img-top"
                    alt="recipe-image">
       <div class="card-body">
            <h5 class="card-title">${recipe.recipeName}</h5>
            <a href="/detail-recipe.html" class="btn btn-primary">Read More</a>
       </div>
    `;

    function selectRecipeItem() {
      function openModal() {
        let recipeModalContent = document.querySelector("#modal-info");
        recipeDetailModal.style.display = "block";
        recipeModalContent.innerHTML = `
             <div class="image-container">
                <img src="${recipe.recipeImage}" />
             </div>
             <div class="recipe-information">
                <h5>${recipe.recipeName}</h5>
               <div class="ingredients-section">
                  <h2>Ingredients</h2>
                  recipes.recipeIngrient.forEach(()=>{})
                  <ul>
                      <li>400g graham crackers</li>
                      <li>150g unsalted butters, melted</li>
                      <li>300g marshmallows</li>
                  </ul>
                </div>
                <div class="preparation-section">
                  <h2>Preparation Instruction</h2>
                  <ol>
                    <li>To prepare crust add graham crackers to a food processor and process until you reach
                        fine
                        crumbs.
                        Add melted butter and pulse 3-4 times to coat crumbs with butter.
                    </li>
                    <li>To prepare crust add graham crackers to a food processor and process until you reach
                        fine
                        crumbs.
                        Add melted butter and pulse 3-4 times to coat crumbs with butter.
                    </li>
                    <li>To prepare crust add graham crackers to a food processor and process until you reach
                        fine
                        crumbs.
                        Add melted butter and pulse 3-4 times to coat crumbs with butter.
                    </li>
                  </ol>
                </div>
              </div>
              <div class="modify-buttons" id="modify-buttons">
                <button type="btn button" class="delete-button" id="delete-button">Delete</button>&nbsp;
                <button type="btn button" class="edit-button" data-bs-toggle="modal"
                    data-bs-target="#updateRecipeForm" id="edit-button">Edit</button>
              </div>
        `;
      }

      function closeModal() {
        recipeDetailModal.style.display = "none";
      }

      recipeCloseModal.addEventListener("click", closeModal);
      recipeCard.addEventListener("click", openModal);
    }
    selectRecipeItem();
    recipeListContainer.appendChild(recipeCard);
  });
}

displayAllRecipes();
