// document.querySelector('form')
//     .addEventListener('submit', e => {
//         e.preventDefault()
//         const data = Object.fromEntries(
//             new FormData(e.target)
//         )
//         alert(JSON.stringify(data))
//     })


function reservarHabitacion(event){
    event.preventDefault();
    let formulario = document.getElementById('formReserva');
    let habitacion = formulario.elements['habitacion'].value;
    let fechaentrada = formulario.elements['fechaentrada'].value;
    let fechasalida = formulario.elements['fechasalida'].value;
    
    // if(nombre.length < 3)
    //     return alert('Ingrese un nombre valido');
    let nombre = formulario.elements['nombre'].value;
    let apellido = formulario.elements['apellido'].value;
    let email = formulario.elements['email'].value;
    let telefono = formulario.elements['telefono'].value;
    

    if(!habitacion || !fechaentrada || !fechasalida || !nombre || !apellido || !email || !telefono){
        alert('Por favor complete todos los campos');
    }
    let cliente = {
        habitacion: habitacion,
        fechaentrada: fechaentrada,
        fechasalida: fechasalida,
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono
    };
    
    localStorage.setItem('cliente', JSON.stringify(cliente));
    window.location.href = 'pago.html';
}