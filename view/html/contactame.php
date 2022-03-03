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
            <h1>Contáctame</h1>
            <div id="contact_container">
                    <section id="contact_data">
                        <div>
                            <p class="contactData_orangeLetter">Nombre:</p>
                            <p class="contactData_blackLetter">Ronald Rodríguez Campillo</p>
                        </div>
                        <div>
                            <p class="contactData_orangeLetter">Teléfono:</p>
                            <p class="contactData_blackLetter">+57 3003581311</p>
                        </div>
                        <div>
                            <p class="contactData_orangeLetter">Email:</p>
                            <p class="contactData_blackLetter">ronaldrrca@gmail.com</p>
                        </div>
                        <div>
                            <p class="contactData_orangeLetter">GitHub:</p>
                            <a href="https://github.com/ronaldrrca" target="_blank">https://github.com/ronaldrrca</a>
                        </div>
                        <div>
                            <p class="contactData_orangeLetter">Linkedin:</p>
                            <a href="https://www.linkedin.com/in/ronald-rodríguez-campillo-66b12771" target="_blank">linkedin.com/in/ronald-rodríguez-campillo-66b12771
                            </a>
                        <div>
                    </section>
                    <section id="contact_form">
                            <h2>Envía un mensaje</h2>
                            <form id="form_contact" action="../../controler/enviar_mail.php" method="POST">
                                <label for="name">Nombre*</label>
                                <input type="text" id="name" class="placeholder_red" name="name" required autofocus>
                                <label for="cellphone">Teléfono Móvil*</label>
                                <input type="tel" id="cellphone" class="placeholder_red" name="cellphone" required>
                                <label for="phone">Teléfono fijo</label>
                                <input type="tel" id="phone" class="placeholder_red" name="phone">
                                <label for="email">Email*</label>
                                <input type="email" id="email" class="placeholder_red" name="email" required>
                                <label for="subject">Asunto*</label>
                                <input type="text" id="subject" class="placeholder_red" name="subject" required>
                                <label for="message">Mensaje*</label>
                                <textarea id="message" name="message" cols="30" rows="10" required placeholder="Escriba aquí su mensaje"></textarea>
                                <p id="required_field">*Campo requerido</p>
                                <input type="submit" id="submit" value="Enviar mensaje">
                            </form>
                    </section>
            </div>
    </main>
    <footer>
            <?php include 'footer.php' ?>
    </footer>
    <script src="../js/header.js"></script>
    <script src="../js/contactame.js"></script>
</body>
</html>