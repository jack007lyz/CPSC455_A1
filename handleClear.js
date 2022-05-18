document.getElementById("clearRecipe").addEventListener("click", handleClear);

function handleClear(){
    let recipeBody = document.getElementById("recipeBody");
    recipeBody.innerHTML = "";
}