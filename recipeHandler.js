document.getElementById("submitButton").addEventListener("click", handleSubmit);
// initialize the webpage
var allRecipes = [];
var initialReceipe = {
    title: "Apple Pie",
    ingredients: ["apple", "sugar", "flour"],
    instructions: ["mix", "bake", "eat"],
}
var initialString = JSON.stringify(initialReceipe);
let startingRecipe = JSON.parse(initialString);
handleAllRecipes(startingRecipe);


function handleSubmit() {
    // Get the input from the user
    let recipeTitle = document.getElementById("recipeTitle").value;
    let recipeIngredients = document.getElementById("ingredient").value;
    let recipeInstructions = document.getElementById("instruction").value;

    // split the ingredients and instructions into an array by comma
    let ingredientsArray = recipeIngredients.split(",");
    let instructionsArray = recipeInstructions.split(",");

    // set a newReceipe
    let newReceipe = {
        title: recipeTitle,
        ingredients: ingredientsArray,
        instructions: instructionsArray,
    }
    handleAllRecipes(newReceipe);
}

function handleAllRecipes(newReceipe){
        let recipeList = document.createElement("ul");
        let recipeTitle = document.createElement("li");
        recipeTitle.innerHTML = newReceipe.title;
        recipeList.appendChild(recipeTitle);
        
        let ingredients = document.createElement("ul");
        for (let i = 0; i < newReceipe.ingredients.length; i++){
            let ingredient = document.createElement("li");
            ingredient.innerHTML = newReceipe.ingredients[i];
            ingredients.appendChild(ingredient);
        }
        recipeTitle.appendChild(ingredients);
    
        let instructions = document.createElement("ol");
        for (let i = 0; i < newReceipe.instructions.length; i++){
            let instruction = document.createElement("li");
            instruction.innerHTML = newReceipe.instructions[i];
            instructions.appendChild(instruction);
        }
        recipeTitle.appendChild(instructions);
    
        let recipeBody = document.getElementById("recipeBody");
        recipeBody.appendChild(recipeList);
}

