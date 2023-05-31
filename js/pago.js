let cliente = JSON.parse(localStorage.getItem('cliente'));
        //validar que esten los datos
        let datos = document.getElementById('datos');
        datos.innerHTML = 
        '<p>Habitacion:' + cliente.habitacion + '</p>'+
        '<p>Fecha de Entrada:' + cliente.fechaentrada + '</p>'+
        '<p>Fecha de Salida:' + cliente.fechasalida + '</p>'+
        '<p>Nombre:' + cliente.nombre + '</p>' +
        '<p>Apellido:' + cliente.apellido + '</p>'+
        '<p>Email:' + cliente.email + '</p>'+
        '<p>Telefono:' + cliente.telefono + '</p>'