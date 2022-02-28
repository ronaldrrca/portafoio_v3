<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="desarrollo web, landing pages, paginas web, sitios web, 
                                        aplicaciones web, diseño responsivo, web development, 
                                        web pages, web sites, web apps, responsive design.">
    <meta name="robots" content="index.follow">
    <link rel="shortcut icon" href="#" /><!--Fixing favicon-->
    <title>Ronald Rodríguez Campillo</title>
</head>
<body>
    <header>
            <?php include 'header.php'?>
    </header>
    <main>
        <h1>Muestras técnicas</h1>
        <div id="xamples_container"><!--xamples_container open-->
            <div id="grid_xamples"><!--grid_xamples open-->
                <div id="grid_xample_1"><!--grid_xample_1 open-->
                    <h2>Esquema de columnas con CSS Grid</h2>
                    <p>Teniendo un número de elementos en un contenedor, los distribuyo en una cantidad determinada de columnas, tomando cada 
                        elemento el ancho automático dependiendo de la distribución. Haz click en cada botón para ver como cambia la distribución.</p>
                    <div class="select_buttons">
                        <div id="_1_column" class="selection_columns active_button">
                            1 Columna
                        </div>
                        <div id="_2_column" class="selection_columns">
                            2 Columnas
                        </div>
                        <div id="_3_column" class="selection_columns">
                            3 Columnas
                        </div>
                        <div id="_4_column" class="selection_columns">
                            4 Columnas
                        </div>
                        <div id="_5_column" class="selection_columns">
                            5 Columnas
                        </div>
                    </div>
                    
                    <div id="boxes_container">
                            <div class="box">1</div>
                            <div class="box">2</div>
                            <div class="box">3</div>
                            <div class="box">4</div>
                            <div class="box">5</div>
                            <div class="box">6</div>
                            <div class="box">7</div>
                            <div class="box">8</div>
                    </div>
                </div><!--grid_xample_1 close-->
                <hr id="mobile_separator">

                <div id="grid_xample_2"><!--grid_xample_2 open-->
                <h2>Maquetación con CSS Grid (areas)</h2>
                    <p>Presento tres mdelos de maquetación web, aplicados mediante CSS Grid (areas), en este caso la disposición se mantiene
                        sin importar el tamaño del dispositivo, pero pudieramos hacer que la disposición cambie con responsive design. 
                        Haz click en cada botón para ver como cambia la maquetación</p>
                    <div class="select_buttons">
                        <div id="modelo_1" class="selection_model active_button">
                            Modelo 1
                        </div>
                        <div id="modelo_2" class="selection_model">
                            Modelo 2
                        </div>
                        <div id="modelo_3" class="selection_model">
                            Modelo 3
                        </div>
                    </div>
                    
                    <div id="grid_a">
                        <div id="header_a" class="box_2">Header</div>
                        <div id="nav_a" class="box_2">Nav</div>
                        <div id="aside_a" class="box_2">Aside</div>
                        <div id="main_a" class="box_2">Main</div>
                        <div id="footer_a" class="box_2">Footer</div>
                    </div>
                
                    <div id="grid_b">
                        <div id="header_b" class="box_2">Header</div>
                        <!-- <div id="nav_b" class="box_2">Nav</div> -->
                        <div id="aside_b" class="box_2">Aside</div>
                        <div id="main_b" class="box_2">Main</div>
                        <div id="footer_b" class="box_2">Footer</div>
                    </div>
                
                    <div id="grid_c">
                        <div id="header_c" class="box_2">Header</div>
                        <div id="nav_c" class="box_2">Nav</div>
                        <!-- <div id="aside_c" class="box_2">Aside</div> -->
                        <div id="main_c" class="box_2">Main</div>
                        <div id="footer_c" class="box_2">Footer</div>
                    </div>
                </div><!--grid_xample_2 close-->
            </div><!--grid_xamples close-->
            <hr id="mobile_separator">
            <div id="dropDownMenu_xamples"><!--dropDownMenu_xample open-->
                <div class="dropDownMenu_xample_container"><!--dropDownMenu_xample_container open-->
                    <h2>Menú desplegable</h2>
                    <p>Menú principal con subumenus desplegables en el Item_1 y en el sub Item_1.3, mediante evento hover </p>
                    <div id="dropDownMenu_xample_1"><!--dropDownMenu_xample_1 open-->
                            <ul id="dropDMX_menu">
                                <li id="menuItem_1" class="menuItem">Item_1 <img class="expand_more" src="../assets/icons/expand_more_white_24dp.svg" alt="">
                                    <ul id="dropDMX_submenu_item_1" class="dropDMX_submenu">
                                        <li id="submenu_item_1_1" class="subMenuItem">Item 1.1</li>
                                        <li id="submenu_item_1_2" class="subMenuItem">Item 1.2</li>
                                        <li id="submenu_item_1_3" class="subMenuItem">Item 1.3 <img class="expand_more_hor" src="../assets/icons/expand_more_white_24dp.svg" alt="">
                                            <ul id="dropDMX_submenu_item_1_3" class="dropDMX_submenu">
                                                <li id="submenu_item_1_3_1" class="subMenuItem">Item 1.3.1</li>
                                                <li id="submenu_item_1_3_2" class="subMenuItem">Item 1.3.2</li>
                                                <li id="submenu_item_1_3_3" class="subMenuItem">Item 1.3.3</li>
                                                <li id="submenu_item_1_3_4" class="subMenuItem">Item 1.3.4</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li id="menuItem_2" class="menuItem">Item_2</li>
                                <li id="menuItem_3" class="menuItem">Item_3</li>
                                <li id="menuItem_4" class="menuItem">Item_4</li>
                            </ul>
                        </div><!--dropDownMenu_xample_1 close-->
                </div><!--dropDownMenu_xample_container close-->
                <hr id="mobile_separator">
                <div class="dropDownMenu_xample_container"><!--dropDownMenu_xample_container open-->
                    <h2>idugiusiguba.jbfv.bj.b</h2>
                        <p>Presento tres mdelos de maquetación web, aplicados mediante CSS Grid (areas), en este caso la disposición se mantiene
                            sin importar el tamaño del dispositivo, pero pudieramos hacer que la disposición cambie con responsive design</p>
                    <div id="dropDownMenu_xample_1"><!--dropDownMenu_xample_2 open-->
                            <ul id="dropDMX_menu">
                                <li id="menuItem_1" class="menuItem">Item_1 <img class="expand_more" src="../assets/icons/expand_more_white_24dp.svg" alt="">
                                    <ul id="dropDMX_submenu_item_1" class="dropDMX_submenu">
                                        <li id="submenu_item_1_1" class="subMenuItem">Item 1.1</li>
                                        <li id="submenu_item_1_2" class="subMenuItem">Item 1.2</li>
                                        <li id="submenu_item_1_3" class="subMenuItem">Item 1.3 <img class="expand_more_hor" src="../assets/icons/expand_more_white_24dp.svg" alt="">
                                            <ul id="dropDMX_submenu_item_1_3" class="dropDMX_submenu">
                                                <li id="submenu_item_1_3_1" class="subMenuItem">Item 1.3.1</li>
                                                <li id="submenu_item_1_3_2" class="subMenuItem">Item 1.3.2</li>
                                                <li id="submenu_item_1_3_3" class="subMenuItem">Item 1.3.3</li>
                                                <li id="submenu_item_1_3_4" class="subMenuItem">Item 1.3.4</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li id="menuItem_2" class="menuItem">Item_2</li>
                                <li id="menuItem_3" class="menuItem">Item_3</li>
                                <li id="menuItem_4" class="menuItem">Item_4</li>
                            </ul>
                    </div><!--dropDownMenu_xample_2 close-->
                </div><!--dropDownMenu_xample_container close-->
                
                
                
            </div><!--dropDownMenu_xamples close-->
        </div><!--xamples_container close-->
            
    </main>
    <footer>
            <?php include 'footer.php' ?>
    </footer>
    <script src="../js/header.js"></script>
    <script src="../js/muestras.js"></script>
</body>
</html>