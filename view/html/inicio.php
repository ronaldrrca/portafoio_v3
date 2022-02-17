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
            <section id="introducingMyself">
                <figure id="introducingMyself_photo">
                        <img src="../assets/images/Sin título-1.png" alt="">
                </figure>
                <div id="introducingMyself_info">
                    <div id="introducingMyself_info_socialMediaIcons">
                        <a href="https://www.linkedin.com/in/ronald-rodríguez-campillo-66b12771" target="_blank"><img src="../assets/icons/linkedin_icon.svg" alt="icono de linkedin"></a>
                        <a href="https://github.com/ronaldrrca" target="_blank"><img src="../assets/icons/github_icon.svg" alt="icono de github"></a>
                        <a href="" target="_blank"><img src="../assets/icons/instagram_icon.svg" alt="icono de instagram"></a>
                        <a href="https://twitter.com/ronaldrrca?s=03" target="_blank"><img src="../assets/icons/twitter_icon.svg" alt="icono de twitter"></a>
                        <a href="" target="_blank"><img src="../assets/icons/facebook_icon.svg" alt="icono de facebook"></a>
                    </div>
                    <p id="introducingMyself_info_name">Ronald Rodríguez Campillo</p>
                    <p class="introducingMyself_info_text">Tecnólogo en Análisis y Desarrollo de Sistemas de Información</p>
                    <p class="introducingMyself_info_text">Desarrollador web</p>
                    <button id="briefcase_button">Mi Portafolio</button>
                </div>
            </section>
            <section id="myProjects">
                <p id="myProjects_title">Proyectos recientes</p>
                <h1>Desarrollo web responsivo, landing pages, páginas, sitios y aplicaciones web</h1>
                <div class="littleRedLine"></div>
                <div id="projects">
                        <div class="project">
                            <img src="../assets/icons/project_icon.svg" alt="">
                            <h3>Memory Game</h3>
                            <p>
                                Juego de memoria con imágenes construido con JavaScript, que incluye cronómetro y contador de intentos. Versión básica a la cual se le agregarán nuevas 
                                funciones porteriormente.<span><a class="see_more" href="portafolio.php">Ver más</a></span>
                            </p>
                        </div>
                        <div class="project"> 
                            <img src="../assets/icons/project_icon.svg" alt="">
                            <h3>Mi Portafolio</h3>
                            <p>
                            Este proyecto, presento mis habilidades y conocimientos como desarrollador, en el podrás ver algunas muestras de lo que puedo ofrecer y presentar otros proyectos. También pretendo ir escalándolo y agregar mucho más contenido.<span><a class="see_more" href="portafolio.php">Ver más</a></span>
                            </p>
                        </div>
                        <div class="project">
                            <img src="../assets/icons/project_icon.svg" alt="">
                            <h3>App piloto Innova ET</h3>
                            <p>
                                Web App para diagnóstico de innovación empresarial. Consta de 2 diagnósticos (inicial y final), que generan el resultado del estado de la empresa,
                                con sus respectivos gráficos y recomendaciones establecidas previamente según los resultados obtenidos. <span><a class="see_more" href="portafolio.php">Ver más</a></span>
                            </p>
                        </div>
                        <div class="project">
                            <img src="../assets/icons/project_icon.svg" alt="">
                            <h3>Ecoculture - Landing page</h3>
                            <p>
                                Landing page con diseño responsivo, cuenta con un slider de imágenes automático y manual de imágenes un formulario que envía los datos ingresados a un correo electrónico.<span><a class="see_more" href="portafolio.php">Ver más</a></span>
                            </p>
                        </div>
                        <div class="project">
                            <img src="../assets/icons/project_icon.svg" alt="">
                            <h3>FAQ - Preguntas y respuestas frecuentes</h3>
                            <p>
                            Componente de preguntas y respuestas frecuentes, con respuestas ocultas que se muestran al hacer click sobre su respectiva pregunta,
                            igualmente se vuelven a ocultar al volver a hacer click en la misma o cualquier otra.<span><a class="see_more" href="portafolio.php">Ver más</a></span>
                            </p>
                        </div>
                        <div class="project">
                            <img src="../assets/icons/project_icon.svg" alt="">
                            <h3>Título proyecto</h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ea quos necessitatibus expedita tempora eaque libero provident, cupiditate nobis eius esse totam rerum non laborum sapiente quas exercitationem molestias reiciendis.<span><a class="see_more" href="portafolio.php">Ver más</a></span>
                            </p>
                        </div>
                </div>
            </section>
            <section id="aboutMe">
                    <h2>Sobre mi</h2>
                    <p id="aboutMe_subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam error reiciendis ea soluta provident molestiae mollitia sit facilis quaerat minima, ex ducimus consectetur iure libero consequuntur, repellat natus enim?</p>
                    <div class="littleRedLine"></div>
                    <div id="aboutMe_content">
                        <figure id="aboutMe_content_photo">
                                <img src="../assets/images/Sin título-1.png" alt="">
                        </figure>
                        <div id="aboutMe_content_info">
                            <h2>Hola</h2>
                            <p id="aboutMe_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem temporibus ut unde reprehenderit officia atque vel commodi id. Nisi quis atque, amet magnam nesciunt earum. Odio sunt laborum maiores beatae!</p>
                            <div id="aboutMe_contactData">
                                <div>
                                    <p class="contactData_redLetter">Nombre:</p>
                                    <p class="contactData_whiteLetter">Ronald Rodríguez Campillo</p>
                                </div>
                                <div>
                                    <p class="contactData_redLetter">Teléfono:</p>
                                    <p class="contactData_whiteLetter">+57 3003581311</p>
                                </div>
                                <div>
                                    <p class="contactData_redLetter">Email:</p>
                                    <p class="contactData_whiteLetter">ronaldrrca@gmail.com</p>
                                </div>
                                <div>
                                    <p class="contactData_redLetter">Linkedin:</p>
                                    <a href="https://www.linkedin.com/in/ronald-rodríguez-campillo-66b12771" target="_blank">linkedin.com/in/ronald-rodríguez-campillo-66b12771</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
    </main>
    <footer>
            <?php include 'footer.php' ?>
    </footer>
    <script src="../js/header.js"></script>
</body>
</html>