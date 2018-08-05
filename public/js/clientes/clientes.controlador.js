'use strict'
const baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
const Salir = document.querySelector('#salir');
const botonRegistrar = document.querySelector('#input-submit');
const botonActualizar = document.querySelector('#input-actualizar');

botonActualizar.hidden = true;

Salir.addEventListener('click',cerrarSesion);
botonRegistrar.addEventListener ('click' , obtenerDatosCliente);
botonActualizar.addEventListener('click', obtenerDatosClienteActualizar);

Comprobar();

function Comprobar() {
    let tipo =sessionStorage.getItem("tipo");

    if(tipo!=3){
        window.location.assign(baseUrl+'/public/logIn.html');
    }
}

function cerrarSesion(){
    sessionStorage.clear();
    window.location.assign(baseUrl+'/public/logIn.html');
}


let inputNombreCliente = document.querySelector('#input-name');
let inputNumCedulaCliente = document.querySelector('#input-cedula');
let inputTelefonoCliente = document.querySelector('#input-telefono');
let inputEmailCliente = document.querySelector('#input-email');
let inputContrasennaCliente = document.querySelector('#input-contrasenna');
let inputContactoCliente = document.querySelector('#input-contacto');
// let inputPais = document.querySelector('#slctPais');

function obtenerDatosCliente(){
    let infoCliente = [];
    let bError = false;
    
    infoCliente.push( inputNombreCliente.value,   
        inputNumCedulaCliente.value,
        inputTelefonoCliente.value,
        inputEmailCliente.value,
        inputContrasennaCliente.value,
        inputContactoCliente.value);
    
        bError = validar();
        if(bError == true){
            swal({
                type : 'warning',
                title : 'No se pudo registrar el cliente',
                text: 'Por favor revise los campos en rojo',
                confirmButtonText : 'Entendido'
            });
        }else{
            registrarCliente(infoCliente);
            swal({
                type : 'success',
                title : 'Registro exitoso',
                text: 'El Cliente se registró adecuadamente',
                confirmButtonText : 'Entendido'
            });
        }
}

function obtenerDatosClienteActualizar() {

    let bError = false;

    let sNombre = inputNombreCliente.value;
    let sNumCed = inputNumCedulaCliente.value;
    let sEmail = inputEmailCliente.value;
    let sTelefono = inputTelefonoCliente.value;
    let nEdad = Number(inputEdad.value);
    let sContacto = inputContactoCliente.value;
    
    //bError = validar();
    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo actualizar el usuario',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });
        console.log('No se pudo registrar el usuario');
    } else {
        console.log(imagenUrl);
        actualizarPersona(idPersonaSeleccionada, sNombre, sNumCed, sEmail, sTelefono, nEdad, sContacto, imagen.src);
        swal({
            type: 'success',
            title: 'Usuario actualizado',
            text: 'El usuario se actualizó adecuadamente',
            confirmButtonText: 'Entendido'
        });
        listaPersonas = obtenerListaPersonas();
        imprimirListaPersonas();
        limpiarFormulario();
        botonActualizar.hidden = true;
        botonRegistrar.hidden = false;
    }
};

function validar(){
    return false;
}


function limpiarFormulario(){
    inputNombreCliente.value = null    
    inputNumCedulaCliente.value = null
    inputTelefonoCliente.value =null
    inputEmailCliente.value = null
    inputContrasennaCliente.value = null
    inputContactoCliente.value = null
    inputPais.value = null
}

function llenarDatosFormulario() {
    botonRegistrar.hidden = true;
    botonActualizar.hidden = false;

    idPersonaSeleccionada = this.dataset._id;// se obtiene el id del usuario seleccionado

    let usuario = obtenerPersonaPorId(idPersonaSeleccionada);

    inputNombre.value = usuario['nombre_completo'];
    inputNumCedulaCliente.value = usuario['cedula'];
    inputTelefonoCliente.value = usuario['telefono'];
    inputEmailCliente.value = usuario['correo'];
    inputContactoCliente.value = usuario['contacto'];

    imagen.src = usuario['foto'];

};
