const menu_icon = document.getElementById("menu_icon");
const dropDown_menu = document.getElementById("dropDown_menu");
const close_menu = document.getElementById("close_menu");

menu_icon.addEventListener("click", () => {
    if (dropDown_menu.style.display == "none") {
        dropDown_menu.style.display = "block"
    }else{
        dropDown_menu.style.display = "none"
    }
})

close_menu.addEventListener("click", () => {
    dropDown_menu.style.display = "none"
})