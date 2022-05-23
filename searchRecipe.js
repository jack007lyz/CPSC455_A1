// search for a recipe according to the recipeTitle
document.getElementById("searchRecipe").addEventListener("click", searchAndClear);

function searchAndClear(){
    let title = document.getElementById("searchTitle").value;
    let searchingBody = document.getElementById("recipeBody");
    let bodyArray = searchingBody.querySelectorAll('.recipeList');
    for (let i = 0; i < bodyArray.length; i++){
        let bodyTitle = bodyArray[i].querySelector("#listTitle").innerHTML;
        if (bodyTitle.includes(title) && title){
            searchingBody.removeChild(bodyArray[i]);
        }
        break;
    }
}

