<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $telefono = $_POST["telefono"];
    $email = $_POST["email"];
    $consulta = $_POST["consulta"];

    // Configura el destinatario y el asunto del correo
    $to = "claudiaalecruz@yahoo.com.ar";
    $subject = "Nueva consulta de contacto";

    // Crea el mensaje de correo
    $message = "Nombre: $nombre\nTeléfono: $telefono\nEmail: $email\nConsulta: $consulta";

    // Configura las cabeceras del correo
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "El formulario se envió con éxito. Nos pondremos en contacto contigo pronto.";
    } else {
        echo "Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente.";
    }
}
?>