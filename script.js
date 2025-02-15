document.addEventListener("DOMContentLoaded", function () {
    // Inicialización del calendario
    $('#calendar').fullCalendar({
        selectable: true,
        events: [],
        select: function (startDate, endDate) {
            alert('Has seleccionado una fecha de: ' + startDate.format());
        }
    });

    // Manejo del formulario de reserva
    document.getElementById('reservation-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const checkIn = document.getElementById('check-in').value;
        const checkOut = document.getElementById('check-out').value;

        if (name && email && checkIn && checkOut) {
            alert('¡Reserva confirmada!\n' +
                  'Nombre: ' + name + '\n' +
                  'Correo: ' + email + '\n' +
                  'Entrada: ' + checkIn + '\n' +
                  'Salida: ' + checkOut);
            // Aquí podrías agregar lógica para enviar los datos a un servidor o base de datos
        } else {
            alert('Por favor completa todos los campos.');
        }
    });
});

