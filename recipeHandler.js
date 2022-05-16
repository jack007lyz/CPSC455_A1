document.getElementById("submitButton").addEventListener("click", handleSubmit);
setupWebpage();
function setupWebpage(){
    let newReceipe = {
        title: "Apple Pie",
        ingredients: ["apple", "sugar", "flour"],
        instructions: ["mix", "bake", "eat"],
    }
    for (let i = 0;i < 2;++i)
    {
    let div = document.createElement('div');
    let recipeTitle = document.createElement("h2");
    recipeTitle.innerHTML = "Test";
    div.appendChild(recipeTitle);
    let recipeBody = document.getElementById("recipeBody");
    recipeBody.appendChild(div);
    }

    // let recipeDiv2 = document.createElement("div");
    // let recipeTitle2 = document.createElement("h2");
    // recipeTitle2.innerHTML = newReceipe.title;
    // recipeDiv2.appendChild(recipeTitle);
    // let recipeBody2 = document.getElementById("recipeBody");
    // recipeBody2.appendChild(recipeDiv);


    // let newElement = document.createElement("ul");
    // let newElement2 = document.createElement("li");
    // newElement2.appendChild(document.createTextNode(newReceipe.title));
    // newElement.appendChild(newElement2);

}

function handleSubmit() {
    // Get the input from the user
    let recipeTitle = document.getElementById("recipeTitle").value;
    let recipeIngredients = document.getElementById("ingredient").value;
    let recipeInstructions = document.getElementById("instruction").value;
    // alert(recipeTitle);
    // alert(recipeIngredients);
    // alert(recipeInstructions);

    // split the ingredients into an array by comma
    let ingredientsArray = recipeIngredients.split(",");
    // alert(ingredientsArray[0]);
    let instructionsArray = recipeInstructions.split(",");
    let newReceipe = {
        title: "applePie",
        ingredients: ["apple", "sugar", "flour"],
        instructions: ["mix", "bake", "eat"],
    }
    alert(newReceipe);
    // parse newReceipe into JSON and save in local disk
    let jsonString = JSON.stringify(newReceipe);
    alert(jsonString);
    // updateRecipes(newReceipe);
}

function updateRecipesInHtml(newReceipe){
    // let recipeList = document.getElementById("recipeList");
    // let newRecipe = document.createElement("li");
    // newRecipe.innerHTML = newReceipe.title;
    // recipeList.appendChild(newRecipe);
}
