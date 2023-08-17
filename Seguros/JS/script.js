$(document).ready(function () {
    $("#contact-form").submit(function (event) {
        event.preventDefault();

        const nombre = $("#nombre").val();
        const telefono = $("#telefono").val();
        const email = $("#email").val();
        const consulta = $("#consulta").val();

        $.ajax({
            url: "/enviar-correo",
            type: "POST",
            data: {
                nombre: nombre,
                telefono: telefono,
                email: email,
                consulta: consulta
            },
            success: function (response) {
                alert("Datos enviados correctamente.");
                $("#contact-form")[0].reset();
            },
            error: function () {
                alert("Hubo un error al enviar los datos.");
            }
        });
    });
});