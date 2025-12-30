// all fetching data load will be here

// loadCategories here
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .then((error) => console.log(error));
}

// loadVideos 
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .then((error) => console.log(error));
}

// loadCategoryBtn
const loadCategoryBtn = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
        // remove active class
        removeActiveClass()

        // button catch here--
        const activeBtn = document.getElementById(`btn-${id}`)
        activeBtn.classList.add("bg-red-500", "text-white")
        displayVideos(data.category)
    })
    .then((error) => console.log(error))
}


// loadVideoDetails
const loadVideoDetails = (videoId) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`)
    .then((res) => res.json())
    .then((data) => displayVideoDetails(data.video))
    .then((error) => console.log(error));
}





// function call always in the last
loadCategories();
loadVideos();

