// all fetching data load will be here

// loadCategories here

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .then((error) => console.log(error));
}

loadCategories();

