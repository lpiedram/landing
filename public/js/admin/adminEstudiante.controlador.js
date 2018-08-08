'use strict';

const baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
const Salir = document.querySelector('#salir');

const nombre = document.querySelector('#nombre');
const cedula = document.querySelector('#cedula');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const fechaNc = document.querySelector('#fechaNc');
const direccion = document.querySelector('#direccion');
const contactoEmer = document.querySelector('#contactoEmer');
const telEmer = document.querySelector('#telEmer');
const foto = document.querySelector('#foto');
const Registrar = document.querySelector('#registrar');


const editNombre = document.querySelector('#editNombre');
const editCedula = document.querySelector('#editCedula');
const editTelefono = document.querySelector('#editTelefono');
const editCorreo = document.querySelector('#editCorreo');
const editFechaNc = document.querySelector('#editFechaNc');
const editDireccion = document.querySelector('#editDireccion');
const editContactoEmer = document.querySelector('#editContactoEmer');
const editTelEmer = document.querySelector('#editTelEmer');
const editFoto = document.querySelector('#editFoto');
const btnEditar = document.querySelector('#btnEditar');
const btnCancelar = document.querySelector('#Cancelar');

const Buscar =document.querySelector('#buscar');
const btnBuscar=document.querySelector('#btnBuscar');



Registrar.addEventListener('click',registrarFormulario);
btnBuscar.addEventListener('click',buscarEstudiante);
btnCancelar.addEventListener('click',cancelar);
Salir.addEventListener('click',cerrarSesion);


Comprobar();
imprimirListaEstudiantes();


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
    let estudiante=[];
    estudiante.push(
        nombre.value,
        cedula.value,
        telefono.value,
        correo.value,
        fechaNc.value,
        direccion.value,
        contactoEmer.value,
        telEmer.value,
        foto.value
    );

    let validar = validarFormulario();

    if(validar){
        toastr.warning('Por favor llene los campos');
    }else{
        let respuesta=registrarEstudiante(estudiante);
        if(respuesta.success == false){
            toastr.error(respuesta.msj);
        }else{
            toastr.success(respuesta.msj);
        }
    }

}

function validarFormulario(){
    let respuesta=false;

    if(nombre.value== null || nombre.value==""){
        respuesta=true;
    }

    if (cedula.value == null || cedula.value==""){
        respuesta=true;
    }

    if (telefono.value == null || telefono.value==""){
        respuesta=true;
    }

    if (correo.value == null || correo.value ==""){
        respuesta=true;
    }

    if (fechaNc.value == null || fechaNc.value ==""){
        respuesta=true;
    }

    if (fechaNc.value == null || fechaNc.value ==""){
        respuesta=true;
    }

    if (direccion.value == null || direccion.value ==""){
        respuesta=true;
    }

    if (contactoEmer.value == null || contactoEmer.value ==""){
        respuesta=true;
    }

    if (telEmer.value == null || telEmer.value ==""){
        respuesta=true;
    }

    return respuesta;
}

function imprimirListaEstudiantes(){
    let listaEstudiantes = obtenerListaEstudiantes();
    let tbody = document.querySelector('#table-users tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaEstudiantes.length; i++){
        let fila = tbody.insertRow();

        let cnombre= fila.insertCell();
        let ccedula= fila.insertCell();
        let ctelefono= fila.insertCell();
        let ccorreo= fila.insertCell();
        let cfechaNc= fila.insertCell();
        let cdireccion= fila.insertCell();
        let ccontactoEmer= fila.insertCell();
        let ctelEmer= fila.insertCell();
        let editar = fila.insertCell();
        
        cnombre.innerHTML = listaEstudiantes[i]['nombre'];
        ccedula.innerHTML = listaEstudiantes[i]['cedula'];
        ctelefono.innerHTML = listaEstudiantes[i]['telefono'];
        ccorreo.innerHTML = listaEstudiantes[i]['correo'];
        cfechaNc.innerHTML = listaEstudiantes[i]['fechaNc'];
        cdireccion.innerHTML = listaEstudiantes[i]['direccion'];
        ccontactoEmer.innerHTML = listaEstudiantes[i]['contactoEmer'];
        ctelEmer.innerHTML = listaEstudiantes[i]['telEmer'];
        editar.innerHTML = '<button type="button" class="editButton" id="'+listaEstudiantes[i]['_id']+'"><i class="fas fa-edit"></i></button>';

        document.getElementById(listaEstudiantes[i]['_id']).onclick= function() {
            let estudiante=filtrarEstudiantes("3",this.id);
            editNombre.value=estudiante[0]['nombre'];
            editCedula.value=estudiante[0]['cedula'];
            editTelefono.value=estudiante[0]['telefono'];
            editCorreo.value=estudiante[0]['correo'];
            editFechaNc.value=estudiante[0]['fechaNc'];
            editDireccion.value=estudiante[0]['direccion'];
            editContactoEmer.value=estudiante[0]['contactoEmer'];
            editTelEmer.value=estudiante[0]['telEmer'];
            editFoto.value=estudiante[0]['foto'];
            document.querySelector('#editFoto').src= editFoto.value;
            $('.tab').slideUp();
            $('.edit-box').slideDown();
        }
        
    }

};

function buscarEstudiante(){
    let listaEstudiantes = filtrarEstudiantes("1",Buscar.value);
    let tbody = document.querySelector('#table-users tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaEstudiantes.length; i++){
        let fila = tbody.insertRow();

        let cnombre= fila.insertCell();
        let ccedula= fila.insertCell();
        let ctelefono= fila.insertCell();
        let ccorreo= fila.insertCell();
        let cfechaNc= fila.insertCell();
        let cdireccion= fila.insertCell();
        let ccontactoEmer= fila.insertCell();
        let ctelEmer= fila.insertCell();
        let editar = fila.insertCell();
        
        cnombre.innerHTML = listaEstudiantes[i]['nombre'];
        ccedula.innerHTML = listaEstudiantes[i]['cedula'];
        ctelefono.innerHTML = listaEstudiantes[i]['telefono'];
        ccorreo.innerHTML = listaEstudiantes[i]['correo'];
        cfechaNc.innerHTML = listaEstudiantes[i]['fechaNc'];
        cdireccion.innerHTML = listaEstudiantes[i]['direccion'];
        ccontactoEmer.innerHTML = listaEstudiantes[i]['contactoEmer'];
        ctelEmer.innerHTML = listaEstudiantes[i]['telEmer'];
        editar.innerHTML = '<button type="button" class="editButton" id="'+listaEstudiantes[i]['_id']+'"><i class="fas fa-edit"></i></button>';

        document.getElementById(listaEstudiantes[i]['_id']).onclick= function() {
            toastr.success(this.id);
            $('.tab').slideUp();
            $('.edit-box').slideDown();
        };
    }

};

function cancelar() {
    toastr.warning('Editar cancelado');
    $('.edit-box').slideUp();
    $('.tab').slideDown();
}
