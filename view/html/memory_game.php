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
    <link rel="shortcut icon" href="../assets/icons/public_white_24dp.svg"/>
    <title>Ronald Rodríguez Campillo</title>
</head>
<body>
    <header>
            <?php include 'header.php'?>
    </header>
    <main>
        <h1>Memory game</h1>
        <div id="memoryGame_container">
        <p id="titleGame">Memory Game</p>
        <div id="data_game">
            <p id="attempts"></p>
            <div id="chrono">
                <p>Tiempo:</p>
                <p id="minutes">Min: 0</p>
                <p id="seconds">Seg: 0</p>
            </div>
        </div>
        <section id="box_memoryGame_container">
            
        </section>
        <div id="help_container">
            <img id="help_icon" src="../assets/icons/help_outline_black_24dp.svg" alt="icono de ayuda">
            <p>Instrucciones</p>
        </div>
        <div id="congratulations">
            <p>felicitaciones!</p>
            <p>Has terminado la partida</p>
            <div id="congratulations_buttons">
                <a href="#"><button id="newGame">Nueva partida</button></a>
                <a href="../html/inicio.php"><button id="cancel_memoryGame">Cancelar</button></a>
            </div>
        </div>
        <div id="instructions_memoryGame">
            <h2>Instrucciones</h2>
            <ul>
                <li>Cada imagen aparece tres veces en el tablero, en posiciones al azar.</li>
                <li>En cada turno podrás elegir tres cajones. (Los que quieras).</li>
                <li>Al destapar el tercer cajón, contarás con 3 segundos para memorizar las ubicaciones de las imágenes.</li>
                <li>Pasados los 3 segundos, se cerrarán los cajones para que elijas los siguientes tres.</li>
                <li>El objetivo es que vayas encontrando 3 imágenes similares en el mismo turno, si lo consigues las imágenes permanecerán destapadas y podrás continuar con el siguiente turno.</li>
                <li>El juego termina al descubrir todas las imágenes.</li>
                <li>Sí utilizas un teléfono móvil, asegúrate que tenga una pantalla de por lo menos 412 pixeles para una correcta visualización.</li>
            </ul>
            <button id="close_button">Cerrar</button>
        </div>
        </div>
            
    </main>
    <script src="../js/header.js"></script>
    <script src="../js/memory_game.js"></script>
    <footer>
            <?php include 'footer.php' ?>
    </footer>
</body>
</html>