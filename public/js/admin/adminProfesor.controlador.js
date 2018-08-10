'use strict';

const baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
const Salir = document.querySelector('#salir');

const nombre = document.querySelector('#nombre');
const cedula = document.querySelector('#cedula');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const profesion = document.querySelector('#profesion');
const experiencia = document.querySelector('#experiencia');
const fechaNacimiento = document.querySelector('#fechaNacimiento');
const foto = document.querySelector('#foto');
const direccion= document.querySelector('#direccion');
const Registrar = document.querySelector('#registrar');

const Buscar =document.querySelector('#buscar');
const btnBuscar=document.querySelector('#btnBuscar');



Registrar.addEventListener('click',registrarFormulario);
btnBuscar.addEventListener('click',buscarProfesor);
Salir.addEventListener('click',cerrarSesion);


Comprobar();
imprimirListaProfesores();


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
    let Profesor=[];
    Profesor.push(
        nombre.value,
        cedula.value,
        telefono.value,
        correo.value,
        profesion.value,
        experiencia.value,
        fechaNacimiento.value,
        foto.value,
        direccion.value
    );

    let validar = validarFormulario();

    if(validar){
        toastr.warning('Por favor llene los campos');
    }else{
        let respuesta=registrarProfesor(Profesor);
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

    if (fechaNc.value == null || (regexFecha.test(fechaNc.value) == false)) {
        fechaNc.classList.add('error_input');
        respuesta = true;
    } else {
        fechaNc.classList.remove('error_input');
    }

    if (profesion.value == '' || (regexSoloLetras.test(profesion.value) == false)) {
        profesion.classList.add('error_input');
        respuesta = true;
    } else {
        profesion.classList.remove('error_input');
    }

    if (experiencia.value == '' || (regexSoloNumeros.test(experiencia.value) == false)) {
        experiencia.classList.add('error_input');
        respuesta = true;
    } else {
        direccion.classList.remove('error_input');
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

function imprimirListaProfesores(){
    let listaProfesores = obtenerListaProfesores();
    let tbody = document.querySelector('#table-users tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaProfesores.length; i++){
        let fila = tbody.insertRow();

        let cnombre= fila.insertCell();
        let ccedula= fila.insertCell();
        let ctelefono= fila.insertCell();
        let ccorreo= fila.insertCell();
        let editar = fila.insertCell();
        let eliminar = fila.insertCell();
        
        cnombre.innerHTML = listaProfesores[i]['nombre'];
        ccedula.innerHTML = listaProfesores[i]['cedula'];
        ctelefono.innerHTML = listaProfesores[i]['telefono'];
        ccorreo.innerHTML = listaProfesores[i]['correo'];
        editar.innerHTML = '<button type="button" class="editButton" id="'+listaProfesores[i]['_id']+'"><i class="fas fa-edit"></i></button>';
        eliminar.innerHTML = '<button type="button" class="deleteButton" id="' + listaProfesores[i]['_id'] + '"><i class="fas fa-minus-circle"></i></button>';

        document.getElementById(listaProfesores[i]['_id']).onclick= function() {
            toastr.success(this.id);
            console.log('working');
        }
    }
};

function buscarProfesor(){
    let listaProfesores = filtrarProfesores("1",Buscar.value);
    let tbody = document.querySelector('#table-users tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaProfesores.length; i++){
        let fila = tbody.insertRow();

        let cnombre= fila.insertCell();
        let ccedula= fila.insertCell();
        let ctelefono= fila.insertCell();
        let ccorreo= fila.insertCell();
        let editar = fila.insertCell();
        
        cnombre.innerHTML = listaProfesores[i]['nombre'];
        ccedula.innerHTML = listaProfesores[i]['cedula'];
        ctelefono.innerHTML = listaProfesores[i]['telefono'];
        ccorreo.innerHTML = listaProfesores[i]['correo'];
        editar.innerHTML = '<button type="button" class="editButton" id="'+listaProfesores[i]['_id']+'"><i class="fas fa-edit"></i></button>';

        document.getElementById(listaProfesores[i]['_id']).onclick= function() {
            toastr.success(this.id);
            console.log('working');
        }
    }
};

function borrarProfesorPorId() {
    let id = this.dataset._id;
    borrarProfesorPorId(id);
    listaProfesores = obtenerListaProfesores();
    imprimirListaProfesores();

}