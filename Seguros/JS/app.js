const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.post('/enviar-correo', (req, res) => {
    const { nombre, telefono, email, consulta } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'renzo.ahumada21@gmail.com',
            pass: 'RNA45500',
        },
    });

    const mailOptions = {
        from: 'renzo.ahumada21@gmail.com',
        to: 'renzo.ahumada21@gmail.com',
        subject: 'Nuevo formulario de contacto',
        html: `
            <p>Nombre: ${nombre}</p>
            <p>Teléfono: ${telefono}</p>
            <p>Email: ${email}</p>
            <p>Consulta: ${consulta}</p>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error al enviar el correo');
        } else {
            console.log('Correo enviado: ' + info.response);
            res.send('Correo enviado correctamente');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});;