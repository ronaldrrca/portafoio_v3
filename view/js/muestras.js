const _1_column = document.getElementById("_1_column");
const _2_column = document.getElementById("_2_column");
const _3_column = document.getElementById("_3_column");
const _4_column = document.getElementById("_4_column");
const _5_column = document.getElementById("_5_column");
const boxes_container = document.getElementById("boxes_container");
const flex_a = document.getElementById("flex_a");
const flex_b = document.getElementById("flex_b");
const flex_c = document.getElementById("flex_c");
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
    flex_b.style.display = "none";
    flex_c.style.display = "none";
    flex_a.style.display = "grid";
    modelo_2.classList.remove("active_button");
    modelo_3.classList.remove("active_button"); 
    modelo_1.classList.add("active_button");
})

modelo_2.addEventListener("click", ()=> {
    flex_c.style.display = "none";
    flex_a.style.display = "none";
    flex_b.style.display = "grid";
    modelo_1.classList.remove("active_button");
    modelo_3.classList.remove("active_button"); 
    modelo_2.classList.add("active_button");
})

modelo_3.addEventListener("click", ()=> {
    flex_b.style.display = "none";
    flex_a.style.display = "none";
    flex_c.style.display = "grid";
    modelo_1.classList.remove("active_button");
    modelo_2.classList.remove("active_button");
    modelo_3.classList.add("active_button"); 
})

