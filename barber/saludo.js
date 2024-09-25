document.addEventListener('DOMContentLoaded', function() {
    const hora = new Date().getHours();
    const saludo = document.getElementById('saludo');
    
    if (hora < 12) {
        saludo.innerText = '¡Buenos días! Estamos listos para atenderte.';
    } else if (hora < 18) {
        saludo.innerText = '¡Buenas tardes! ¿Listo para un cambio de look?';
    } else {
        saludo.innerText = '¡Buenas noches! Agenda tu cita para mañana.';
    }
});
