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

// displayVideos
const displayVideos = (videos) => {
    videos.forEach((video) => {
        const card = document.createElement("div")
        card.innerHTML = 
        `<figure class="h-[200px] relative">
    <img class="h-full w-full object-cover"
      src= ${video.thumbnail}
      alt="" />  
  </figure>

  <div class="px-0 py-2 flex gap-2">
  <img class="w-[35px] h-[35px] rounded-full object-cover" src= ${video.authors[0].profile_picture}>
    <div class =""> 
    <h2 class="text-xl font-bold">${video.title}</h2>
    <div class="flex gap-2">
    <p class="text-lg">${video.authors[0].profile_name}</p>
    ${video.authors[0].verified == true 
        ? `<img class="w-7 object-cover" src="https://img.icons8.com/?size=100&id=123575&format=png"></img>` : ""}
    </div>
    <p>${video.others.views} views</p>
    </div>
  </div>
        `
        // append card div to the videoContainer
        const videoContainer = document.getElementById("videos-container")
        videoContainer.append(card)


    })
}