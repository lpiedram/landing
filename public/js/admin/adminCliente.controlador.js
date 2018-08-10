'use strict';

const baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
const Salir = document.querySelector('#salir');

const nombre = document.querySelector('#nombre');
const cedula = document.querySelector('#cedula');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const contactoNombre = document.querySelector('#contactoNombre');
const contactoTel = document.querySelector('#contactoTel');
const contactoEmail = document.querySelector('#contactoEmail');
const foto = document.querySelector('#foto');
const Registrar = document.querySelector('#registrar');

const Buscar =document.querySelector('#buscar');
const btnBuscar=document.querySelector('#btnBuscar');



Registrar.addEventListener('click',registrarFormulario);
btnBuscar.addEventListener('click',buscarCliente);
Salir.addEventListener('click',cerrarSesion);


Comprobar();
imprimirListaClientes();


function Comprobar() {
    let tipo =sessionStorage.getItem("tipo");

    if(tipo!=0){
        window.location.assign(baseUrl+'/public/logIn.html');
    }
}

function cerrarSesion(){
    sessionStorage.clear();
    window.location.assign(baseUrl+'/public/logIn.html');
}

function registrarFormulario() {
    let cliente=[];
    cliente.push(
        nombre.value,
        cedula.value,
        telefono.value,
        correo.value,
        contactoNombre.value,
        contactoEmail.value,
        contactoTel.value,
        foto.value
    );

    let validar = validarFormulario();

    if(validar){
        toastr.warning('Por favor llene los campos');
    }else{
        let respuesta=registrarCliente(cliente);
        if(respuesta.success == false){
            toastr.error(respuesta.msj);
        }else{
            toastr.success(respuesta.msj);
        }
    }

}

function validarFormulario() {

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^ ([0 - 9]) * $ /;
    let regexCedula = /^[1-9]-?\d{4}-?\d{4}$/;
    let regexTelefono = /^([0-9]+){9}$/;
    let regexCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    let regexFecha = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    let regexFoto = /.(gif|jpeg|jpg|png)$/;
    let respuesta = false;

    if (nombre.value == '' || (regexSoloLetras.test(nombre.value) == false)) {
        nombre.classList.add('error_input');
        respuesta = true;
    } else {
        nombre.classList.remove('error_input');
    }

    if (cedula.value == null || (regexCedula.test(cedula.value) == false)) {
        cedula.classList.add('error_input');
        respuesta = true;
    } else {
        cedula.classList.remove('error_input');
    }

    if (telefono.value == null || (regexTelefono.test(telefono.value) == false)) {
        telefono.classList.add('error_input');
        respuesta = true;
    } else {
        telefono.classList.remove('error_input');
    }

    if (correo.value == null || (regexCorreo.test(correo.value) == false)) {
        correo.classList.add('error_input');
        respuesta = true;
    } else {
        correo.classList.remove('error_input');
    }

    if (contactoNombre.value == '' || (regexSoloLetras.test(contactoNombre.value) == false)) {
        contactoNombre.classList.add('error_input');
        respuesta = true;
    } else {
        contactoNombre.classList.remove('error_input');
    }

    if (contactoTel.value == '' || (regexSoloNumeros.test(contactoTel.value) == false)) {
        contactoTel.classList.add('error_input');
        respuesta = true;
    } else {
        contactoTel.classList.remove('error_input');
    }

    if (contactoEmail.value == null || (regexCorreo.test(contactoEmail.value) == false)) {
        contactoEmail.classList.add('error_input');
        respuesta = true;
    } else {
        contactoEmail.classList.remove('error_input');
    }

    if (direccion.value == '' || (regexSoloLetras.test(direccion.value) == false)) {
        direccion.classList.add('error_input');
        respuesta = true;
    } else {
        direccion.classList.remove('error_input');
    }

    if (foto.value == null || (regexFoto.test(foto.value) == false)) {
        foto.classList.add('error_input');
        respuesta = true;
    } else {
        foto.classList.remove('error_input');
    }

    return respuesta;
}

function imprimirListaClientes(){
    let listaClientes = obtenerListaClientes();
    let tbody = document.querySelector('#table-users tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaClientes.length; i++){
        let fila = tbody.insertRow();

        let cnombre= fila.insertCell();
        let ccedula= fila.insertCell();
        let ctelefono= fila.insertCell();
        let ccorreo= fila.insertCell();
        let editar = fila.insertCell();
        
        cnombre.innerHTML = listaClientes[i]['nombre'];
        ccedula.innerHTML = listaClientes[i]['cedula'];
        ctelefono.innerHTML = listaClientes[i]['telefono'];
        ccorreo.innerHTML = listaClientes[i]['correo'];
        editar.innerHTML = '<button type="button" class="editButton" id="'+listaClientes[i]['_id']+'"><i class="fas fa-edit"></i></button>';

        document.getElementById(listaClientes[i]['_id']).onclick= function() {
            toastr.success(this.id);
            console.log('working');
        }
        
    }

};

function buscarCliente(){
    let listaClientes = filtrarClientes("1",Buscar.value);
    let tbody = document.querySelector('#table-users tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaClientes.length; i++){
        let fila = tbody.insertRow();

        let cnombre= fila.insertCell();
        let ccedula= fila.insertCell();
        let ctelefono= fila.insertCell();
        let ccorreo= fila.insertCell();
        let editar = fila.insertCell();
        
        cnombre.innerHTML = listaClientes[i]['nombre'];
        ccedula.innerHTML = listaClientes[i]['cedula'];
        ctelefono.innerHTML = listaClientes[i]['telefono'];
        ccorreo.innerHTML = listaClientes[i]['correo'];
        editar.innerHTML = '<button type="button" class="editButton" id="'+listaClientes[i]['_id']+'"><i class="fas fa-edit"></i></button>';

        document.getElementById(listaClientes[i]['_id']).onclick= function() {
            toastr.success(this.id);
            console.log('working');
        }
        
    }

};
