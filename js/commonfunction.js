const removeActiveClass = () =>{
    const buttons = document.getElementsByClassName("category-btn");
    for (btn of buttons){
        btn.classList.remove("bg-red-500", "text-white")
    }
}