'use strict';

const baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
const Salir = document.querySelector('#salir');

//imprimir_lista_datos();
let botonGuardar = document.querySelector('#btnGuardar');
let botonActualizar = document.querySelector('#input-actualizar');
botonActualizar.hidden = true;

let inputNombre = document.querySelector('#txtNombre');
let inputCedula = document.querySelector('#txtCed');
let inputTelefono = document.querySelector('#txtTelefono');
let inputCorreo = document.querySelector('#txtEmail');
let inputFechaN = document.querySelector('#txtFecha');
// let inputEstadoCivil = document.querySelector('#sltEstado');
// let inputNacionalidad = document.querySelector('#slctPais');
let inputLugarResidencia = document.querySelector('#txtDir');
let inputContactoEmer = document.querySelector('#txtCont');
let inputTelEmer = document.querySelector('#txtTel2');

Salir.addEventListener('click', cerrarSesion);
botonGuardar.addEventListener('click', obtenerDatos);
botonActualizar.addEventListener('click', obtenerDatosActualizar);

Comprobar();

function Comprobar() {
    let tipo =sessionStorage.getItem("tipo");

    if(tipo!=1){
        window.location.assign(baseUrl+'/public/logIn.html');
    }
}

function cerrarSesion(){
    sessionStorage.clear();
    window.location.assign(baseUrl+'/public/logIn.html');
}

/*function obtenerDatos(){
    let infoEstudiante = [];
    let bError = false;

    infoEstudiante.push(
        inputNombre.value,
        inputCedula.value,
        inputTelefono.value,
        inputCorreo.value,
        inputFechaN.value,
        inputEstadoCivil.value, 
        inputNacionalidad.value, 
        inputLugarResidencia.value,
        inputContactoEmer.value,
        inputTelEmer.value);

        bError = validar();
        if(bError == true){
            swal({
                type : 'warning',
                title : 'No se pudo registrar el profesor',
                text: 'Por favor revise los campos en rojo',
                confirmButtonText : 'Entendido'
            });
        }else{
            registrarEstudiante(infoEstudiante);
            swal({
                type : 'success',
                title : 'Registro exitoso',
                text: 'El usuario se registró adecuadamente',
                confirmButtonText : 'Entendido'
            });

            limpiarFormulario();
        }
};

function obtenerDatosActualizar() {

    let bError = false;

    let sNombre = inputNombre.value;
    let sNumCed = inputNumCedula.value;
    let sEmail = inputEmail.value;
    let sTelefono = inputTelefono.value;
    let nFechaN = Number(inputFechaN.value);
    let sLugarResi = inputLugarResidencia.value;
    let sContacto = inputContactoEmer.value;
    let sTelEmer = inputTelEmer.value;

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
        actualizarPersona(idPersonaSeleccionada, sNombre, sNumCed, sEmail, sTelefono, nFechaN, sLugarResi, sContacto, sTelEmer, imagen.src);
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
    inputNombre.value=null;
    inputCedula.value=null;
    inputTelefono.value=null;
    inputCorreo.value=null;
    inputFechaN.value=null;
    inputEstadoCivil.value=null; 
    inputNacionalidad.value=null; 
    inputLugarResidencia.value=null;
    inputContactoEmer.value=null;
    inputTelEmer.value=null;
}

function llenarDatosFormulario() {
    botonRegistrar.hidden = true;
    botonActualizar.hidden = false;

    idPersonaSeleccionada = this.dataset._id;// se obtiene el id del usuario seleccionado

    let estudiante = obtenerPersonaPorId(idPersonaSeleccionada);

    inputNombre.value = estudiante['nombre_completo'];
    inputNumCedulaCliente.value = estudiante['cedula'];
    inputTelefonoCliente.value = estudiante['telefono'];
    inputEmailCliente.value = estudiante['correo'];
    inputFechaN.value= estudiante['fechaNc'];
    inputLugarResidencia.value= estudiante['direccion'];
    inputContactoEmer.value= estudiante['contactoEmer'];
    inputTelEmer.value= estudiante['telEmer'];

    imagen.src = estudiante['foto'];

};
*/