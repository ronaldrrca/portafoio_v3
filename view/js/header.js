const menu_icon = document.getElementById("menu_icon");
const dropDown_menu = document.getElementById("dropDown_menu");
const close_menu = document.getElementById("close_menu");
const start_menu_button = document.getElementById("start_menu_button");
const services_menu_button = document.getElementById("services_menu_button");
const skills_menu_button = document.getElementById("skills_menu_button");
const briefcase_menu_button = document.getElementById("briefcase_menu_button");
const xamples_menu_button = document.getElementById("xamples_menu_button");
const blog_menu_button = document.getElementById("blog_menu_button");
const contact_menu_button = document.getElementById("contact_menu_button");
let page = window.location.href; //identificando la url completa
//Colocandlo límites para obtener el nombre del archivo
const extention = page.indexOf(".php");
const limit = page.lastIndexOf("/");
let fileName = page.slice(limit + 1, extention);//Obteniendo el nombre del archivo.

//Eventos clic para el menú móvil
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


//Cambiando el color al item del menú, según la página en la que se encuentre
switch (fileName) {
    case "inicio":
        start_menu_button.style.color = "#FF6600";
        break;
    case "servicios":
        services_menu_button.style.color = "#FF6600";
        break;
    case "habilidades":
        skills_menu_button.style.color = "#FF6600";
        break;
    case "portafolio":
        briefcase_menu_button.style.color = "#FF6600";
        break;
    case "muestras_tecnicas":
        xamples_menu_button.style.color = "#FF6600";
        break;
    case "blog":
        blog_menu_button.style.color = "#FF6600";
        break;
    case "contactame":
        contact_menu_button.style.color = "#FF6600";
}



