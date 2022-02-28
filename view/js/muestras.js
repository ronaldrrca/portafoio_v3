const _1_column = document.getElementById("_1_column");
const _2_column = document.getElementById("_2_column");
const _3_column = document.getElementById("_3_column");
const _4_column = document.getElementById("_4_column");
const _5_column = document.getElementById("_5_column");
const boxes_container = document.getElementById("boxes_container");
const grid_a = document.getElementById("grid_a");
const grid_b = document.getElementById("grid_b");
const grid_c = document.getElementById("grid_c");
const modelo_1 = document.getElementById("modelo_1");
const modelo_2 = document.getElementById("modelo_2");
const modelo_3 = document.getElementById("modelo_3");


//Función que cambia el número de columnas, muestra el botón activo.
function resolve_columns(columns){
    
    if (columns == 1) {
        boxes_container.style.gridTemplateColumns = "100%";
        _2_column.classList.remove("active_button");
        _3_column.classList.remove("active_button");
        _4_column.classList.remove("active_button");
        _5_column.classList.remove("active_button");
        _1_column.classList.add("active_button");
    }else if(columns == 2){
        boxes_container.style.gridTemplateColumns = "repeat(2, auto)";
        _1_column.classList.remove("active_button");
        _3_column.classList.remove("active_button");
        _4_column.classList.remove("active_button");
        _5_column.classList.remove("active_button");
        _2_column.classList.add("active_button");
    }else if(columns == 3){
        boxes_container.style.gridTemplateColumns = "repeat(3, auto)";
        _1_column.classList.remove("active_button");
        _2_column.classList.remove("active_button");
        _4_column.classList.remove("active_button");
        _5_column.classList.remove("active_button");
        _3_column.classList.add("active_button");
    }else if(columns == 4){
        boxes_container.style.gridTemplateColumns = "repeat(4, auto)";
        _1_column.classList.remove("active_button");
        _2_column.classList.remove("active_button");
        _3_column.classList.remove("active_button");
        _5_column.classList.remove("active_button");
        _4_column.classList.add("active_button");
    }else if(columns == 5){
        boxes_container.style.gridTemplateColumns = "repeat(5, auto)";
        _1_column.classList.remove("active_button");
        _2_column.classList.remove("active_button");
        _3_column.classList.remove("active_button");
        _4_column.classList.remove("active_button");
        _5_column.classList.add("active_button");
    }
  
}

//Eventos click en los botones que llaman a la fución "resolve_columns"
_1_column.addEventListener("click", ()=> {
    resolve_columns(1);
})

_2_column.addEventListener("click", ()=> {
    resolve_columns(2);

})

_3_column.addEventListener("click", ()=> {
    resolve_columns(3);
})

_4_column.addEventListener("click", ()=> {
    resolve_columns(4);
})

_5_column.addEventListener("click", ()=> {
    resolve_columns(5);
})



//Eventos click para cambiar entre los tres modelos de maquetación con Grid y muestran el botón activo.
modelo_1.addEventListener("click", ()=> {
    grid_b.style.display = "none";
    grid_c.style.display = "none";
    grid_a.style.display = "grid";
    modelo_2.classList.remove("active_button");
    modelo_3.classList.remove("active_button"); 
    modelo_1.classList.add("active_button");
})

modelo_2.addEventListener("click", ()=> {
    grid_c.style.display = "none";
    grid_a.style.display = "none";
    grid_b.style.display = "grid";
    modelo_1.classList.remove("active_button");
    modelo_3.classList.remove("active_button"); 
    modelo_2.classList.add("active_button");
})

modelo_3.addEventListener("click", ()=> {
    grid_b.style.display = "none";
    grid_a.style.display = "none";
    grid_c.style.display = "grid";
    modelo_1.classList.remove("active_button");
    modelo_2.classList.remove("active_button");
    modelo_3.classList.add("active_button"); 
})

// const dropDMX_submenu_item_1 = document.getElementById("dropDMX_submenu_item_1");
// const dropDMX_submenu_item_1_3 = document.getElementById("dropDMX_submenu_item_1_3");
// const menuItem_1 = document.getElementById("menuItem_1");
// const submenu_item_1_3 = document.getElementById("submenu_item_1_3");

// menuItem_1.addEventListener("click", (e)=> {
//     if (dropDMX_submenu_item_1.style.display === "none") {
//         dropDMX_submenu_item_1.style.display = "block";
        
//     }else {
//         dropDMX_submenu_item_1.style.display = "none";
//         // e.stopPropagation();
//     }
// })

// submenu_item_1_3.addEventListener("click", ()=> {
    
//     dropDMX_submenu_item_1_3.style.display = "block";
// })


