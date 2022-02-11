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
                    <section id="project_1" class="briefcase_project">
                        <h2>Mi Portafolio</h2>
                        <div class="float_left">
                            <h3>Tipo:</h3>
                            <p>Sitio web</p>
                        </div>
                        <h3>Descripción:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores, officiis tempora, exercitationem nulla ducimus debitis eligendi autem natus expedita ipsum quia minus asperiores totam ad provident illum reiciendis iure!</p>
                        <div class="float_left">
                            <h3>Link del repositorio:</h3>
                            <a id="link_repo" href="https://github.com/ronaldrrca/portafolio_v3.git" target="_blank">https://github.com/ronaldrrca/portafolio_v3.git</a>
                        </div>
                        <h3>Imágenes</h3>
                        <figure class="briefcase_project_images">
                            <img src="../assets/images/services-image.jpg" alt="">
                            <img src="../assets/images/services-image.jpg" alt="">
                            <img src="../assets/images/services-image.jpg" alt="">
                        </figure>
                    </section>
                    <section id="project_2" class="briefcase_project">
                        <h2>App piloto Innova ET</h2>
                        <div class="float_left">
                            <h3>Tipo:</h3>
                            <p>Web App</p>
                        </div>
                        <h3>Descripción:</h3>
                        <p>
                            Web App para diagnóstico de innovación empresarial realizada durante mi período de pruebas.
                            Consta de 2 diagnósticos (inicial y final), que generan el resultado del estado de la empresa,
                            con sus respectivos gráficos y recomendaciones establecidas previamente por lógica según los 
                            resultados obtenidos. Posterior al diagnóstico final, se genera un resultado comparativo entre
                            los dos diagnósticos. Cuenta con control de usuarios según el perfil, diseño y desarroolo 
                            responsivo (Adaptable a las pantallas de diferentes dispositivos), y la base de datos fue creada en MySQL.
                        </p>
                        <div class="float_left">
                            <h3>Link del repositorio:</h3>
                            <a id="link_repo" href="https://github.com/ronaldrrca/app_innova_et" target="_blank">https://github.com/ronaldrrca/app_innova_et</a>
                        </div>
                        <h3>Imágenes</h3>
                        <figure>
                            <img src="../assets/images/img-app-innova-et-1.png" alt="">
                            <img src="../assets/images/img-app-innova-et-2.png" alt="">
                            <img src="../assets/images/img-app-innova-et-3.png" alt="">
                        </figure>
                    </section>
                    <section id="project_3" class="briefcase_project">
                        <h2>Ecoculture Landing</h2>
                        <div class="float_left">
                            <h3>Tipo:</h3>
                            <p>Landing page</p>
                        </div>
                        <h3>Descripción:</h3>
                        <p>Landing page realizada durante mi período de prácticas para una empresa de turismo de naturaleza, agroecología
                            y educación ambiental. Diseño y desarrollo responsivo, cuenta con un slider de imágenes que cambian automáticamente 
                            cada cierta cantidad de segundos establecidos, y también con botones de avance y retorceso para que el usuario 
                            tenga la libertad de cambiarlas a su ritmo. Tiene un formulario que envía los datos ingresados a un correo electrónico 
                            preestablecido.          
                        </p>
                        <div class="float_left">
                            <h3>Link del repositorio:</h3>
                            <a id="link_repo" href="https://github.com/ronaldrrca/ecoculture_landingPage" target="_blank">https://github.com/ronaldrrca/ecoculture_landingPage</a>
                        </div>
                        <h3>Imágenes</h3>
                        <figure>
                            <img src="../assets/images/img-ecoculture-1.png" alt="">
                            <img src="../assets/images/img-ecoculture-2.png" alt="">
                            <img src="../assets/images/img-ecoculture-3.png" alt="">
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