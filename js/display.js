// all loading data will display here

// displayCategories

const displayCategories = (categories)=> {
    categories.forEach((item)=>{
        // create button in the div- tht's why first take a div
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML = 
        ` <button class="btn">
            ${item.category} 
            </button>
        `
        // append the buttonContainer to the categoryContainer to show in UI-
        const categoryContainer = document.getElementById("category-container")
        categoryContainer.append(buttonContainer);

    })
}