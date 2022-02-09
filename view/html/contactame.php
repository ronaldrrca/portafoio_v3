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
            <h1>Contáctame</h1>
            <div id="contact_content">
                    <section id="contact_data">
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
                            <p class="contactData_whiteLetter">jhgugiebwecj</p>
                        <div>
                              
                    </section>
                    <section id="contact_form">
                            <h2>Envía un mensaje</h2>
                            <form action="#">
                                <label for="name">Nombre*</label>
                                <input type="text" required autofocus>
                                <label for="celphone">Teléfono Celular*</label>
                                <input type="tel" required>
                                <label for="phone">Teléfono fijo</label>
                                <input type="tel">
                                <label for="email">Email*</label>
                                <input type="email" required>
                                <label for="subject">Asunto*</label>
                                <input type="text" required>
                                <label for="message">Mensaje*</label>
                                <textarea name="" id="" cols="30" rows="10" required placeholder="Escriba aquí su mensaje"></textarea>
                                <p id="required_field">*Campo requerido</p>
                                <input type="submit" value="Enviar mensaje">
                            </form>
                    </section>
            </div>
            
            
    </main>
    <footer>

    </footer>
    <script src="../js/header.js"></script>
</body>
</html>