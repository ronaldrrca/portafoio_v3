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
            <h1>Portafolio</h1>
            <div id="briefcase_container">
                    <section id="project_3" class="briefcase_project">
                        <h2>App piloto Innova ET</h2>
                        <div class="float_left">
                            <h3>Tipo:</h3>
                            <p>Web App</p>
                        </div>
                        <h3>Descripción:</h3>
                        <p>
                            Web App para diagnóstico de innovación empresarial, Consta de 2 diagnósticos (inicial y final), que 
                            generan el resultado del estado de la empresa, con sus respectivos gráficos y recomendaciones establecidas 
                            previamente según los resultados obtenidos. Posterior al diagnóstico final, se genera un resultado comparativo 
                            entre los dos diagnósticos. Cuenta con control de usuarios según el perfil, diseño y desarroolo responsivo 
                            (Adaptable a las pantallas de diferentes dispositivos), y la base de datos fue creada en MySQL.
                        </p>
                        <div class="float_left">
                            <h3>Link del repositorio:</h3>
                            <a id="link_repo" href="https://github.com/ronaldrrca/app_innova_et" target="_blank">https://github.com/ronaldrrca/app_innova_et</a>
                        </div>
                        <h3>Imágenes</h3>
                        <figure>
                            <img src="../assets/images/img-app-innova-et-1.png" alt="imagen de aplicacion web">
                            <img src="../assets/images/img-app-innova-et-2.png" alt="imagen de aplicacion web">
                            <img src="../assets/images/img-app-innova-et-3.png" alt="imagen de aplicacion web">
                        </figure>
                    </section>
                    <section id="project_4" class="briefcase_project">
                        <h2>Ecoculture Landing</h2>
                        <div class="float_left">
                            <h3>Tipo:</h3>
                            <p>Landing page</p>
                        </div>
                        <h3>Descripción:</h3>
                        <p>Landing page realizada durante mi período de prácticas para una empresa de turismo de naturaleza, agroecología
                            y educación ambiental. Diseño y desarrollo responsivo, cuenta con un slider de imágenes que cambian automáticamente 
                            cada cierta cantidad de segundos establecidos, y también con botones de avance y retroceso para que el usuario 
                            tenga la libertad de cambiarlas a su ritmo. Tiene un formulario que envía los datos ingresados a un correo electrónico 
                            preestablecido.          
                        </p>
                        <div class="float_left">
                            <h3>Link del repositorio:</h3>
                            <a id="link_repo" href="https://github.com/ronaldrrca/ecoculture_landingPage" target="_blank">https://github.com/ronaldrrca/ecoculture_landingPage</a>
                        </div>
                        <h3>Imágenes</h3>
                        <figure>
                            <img src="../assets/images/img-ecoculture-1.png" alt="imagen de landing page">
                            <img src="../assets/images/img-ecoculture-2.png" alt="imagen de landing page">
                            <img src="../assets/images/img-ecoculture-3.png" alt="imagen de landing page">
                        </figure>
                    </section>
                    <section id="project_1" class="briefcase_project">
                        <h2>Memory Game</h2>
                        <div class="float_left">
                            <h3>Tipo:</h3>
                            <p>Juego</p>
                        </div>
                        <h3>Descripción:</h3>
                        <p>
                            Juego de memoria con imágenes construido con JavaScript, que incluye cronómetro y contador de intentos. Versión básica a la cual se le agregarán nuevas 
                            funciones porteriormente. Utilicé CSS Grid y FlexBox según lo consideraba pertinente para las distribución y redistribución de los elementos en el
                            proceso de adaptabilidad a los diferentes tamaños de dispositivos.
                        </p>
                        <div class="float_left">
                            <h3>Link del repositorio:</h3>
                            <a id="link_repo" href="https://github.com/ronaldrrca/memory" target="_blank">https://github.com/ronaldrrca/memory</a>
                        </div>
                        <h3>Imágenes</h3>
                        <figure class="briefcase_project_images">
                            <img src="../assets/images/img.memory-game-1.png" alt="imagen de juego de memoria">
                            <img src="../assets/images/img.memory-game-2.png" alt="imagen de juego de memoria">
                            <img src="../assets/images/img.memory-game-3.png" alt="imagen de juego de memoria">
                        </figure>
                    </section>
            </div>
    </main>
    <footer>
            <?php include 'footer.php' ?>
    </footer>
    <script src="../js/header.js"></script>
</body>
</html>