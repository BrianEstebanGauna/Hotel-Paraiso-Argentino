// document.querySelector('form')
//     .addEventListener('submit', e => {
//         e.preventDefault()
//         const data = Object.fromEntries(
//             new FormData(e.target)
//         )
//         alert(JSON.stringify(data))
//     })





// Validacion de formulario

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/,
}

const campos = {
	nombre: false,
    apellido: false,
	email: false,
	telefono: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
        case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
}}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.apellido && campos.email && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

		// json

function reservarHabitacion(event){
    event.preventDefault();
    let formulario = document.getElementById('formulario');
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
