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
            <h1>Habilidades y conocimientos </h1>
            <div id="skills_container">
                <div id="degrees" class="skills_card">
                    <h2 id="degrees_tittle">Estudios</h2>
                    <p>Tecnólogo en Análisis y Desarrollo de Sistemas de Información.</p><br>
                    <p><b>Servicio Nacional de Aprendizaje - SENA.</b></p>
                </div>
                <div id="languages" class="skills_card">
                    <h2 id="languages_tittle">Idiomas</h2>
                    <b>Inglés</b>
                    <ul>
                        <li>Listening: Intermedio.</li>
                        <li>Speaking: Básico.</li>
                        <li>Reading: Intermedio.</li>
                        <li>Writing: Intermedio.</li>
                    </ul>
                </div>
                <div id="interests" class="skills_card">
                    <h2 id="interests_tittle">Intereses</h2>
                    <ul>
                        <li>Adquirir conocimientos constantemente.</li>
                        <li>Participar de proyectos colaborativos.</li>
                        <li>Realizar proyectos como freelancer.</li>
                        <li>Trabajar para una empresa que me permita crecer profesional y personalmente.</li>
                    </ul>
                </div>
                <div id="programming_languages" class="skills_card">
                    <h2 id="programming_languages_tittle">Lenguajes de programación</h2>
                    <ul id="programming_languages_items">
                        <li>JavaScript</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <div id="other_knowledges" class="skills_card">
                    <h2 id="other_knowledges_tittle">Otros conocimientos técnicos</h2>
                    <ul id="other_knowledges_items">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>MySQL</li>
                        <li>GIT</li>
                        <li>GitHub</li>
                        <li>MVC</li>
                    </ul>
                 </div>
                <div id="skills" class="skills_card">
                    <h2 id="skills_tittle">Habilidades</h2>
                    <ul>
                        <li>Trabajo en equipo</li>
                        <li>Adaptación al cambio</li>
                    </ul>
                </div>
                <div id="hobbies" class="skills_card">
                    <h2 id="hobbies_tittle">Hobbies</h2>
                    <ul>
                        <li>Estudiar</li>
                        <li>Programar</li>
                        <li>Transmitir conocimientos</li>
                        <li>Ejercicio físico moderado</li>
                        <li>Lectura</li>
                        <li>Ver documentales de historia</li>
                    </ul>
                </div>
            </div>
    </main>
    <footer>
            <?php include 'footer.php' ?>
    </footer>
    <script src="../js/header.js"></script>
</body>
</html>