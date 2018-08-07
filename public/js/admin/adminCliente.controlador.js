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
const actualizar = document.querySelector('#actualizar');

const Buscar =document.querySelector('#buscar');
const btnBuscar=document.querySelector('#btnBuscar');

Registrar.addEventListener('click',registrarFormulario);
actualizar.addEventListener('click', actualizarCliente);
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

        editar.addEventListener('click', llenarDatosFormulario(editar.value));

        document.getElementById(listaClientes[i]['_id']).onclick= function() {
            toastr.success(this.id);
            
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

function editarCliente() {

    let bError = false;
    let id = listaClientes[i]['_id'];

    let sNombre = nombre.value;
    let sCed = cedula.value;
    let nTel = telefono.value;
    let sCorreo = correo.value;
    let sContNom = contactoNombre.value;
    let sContEmail = contactoEmail.value;
    let nContTel = contactoTel.value;
    let sContrasenna = contrasenna.value;
    let foto = foto.value;

    //bError = validar();
    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo actualizar el usuario',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });
    } else {
        actualizarPersona(id, sNombre, sCed, nTel, sCorreo, sContNom, sContEmail, nContTel, sContrasenna, foto);
        swal({
            type: 'success',
            title: 'Usuario actualizado',
            text: 'El usuario se actualizó adecuadamente',
            confirmButtonText: 'Entendido'
        });
        listaPersonas = obtenerListaPersonas();
        imprimirListaPersonas();
        limpiarFormulario();
        actualizar.hidden = true;
        Registrar.hidden = false;
    }
};

function llenarDatosFormulario(id) {
    Registrar.hidden = true;
    actualizar.hidden = false;

    //id = listaClientes[i]['_id'];/ se obtiene el id del usuario seleccionado

    let cliente = obtenerPersonaPorId(id);

    nombre.value = cliente['nombre'];
    cedula.value = cliente ['cedula'];
    telefono.value = cliente['telefono'];
    correo.value = cliente['correo'];
    contactoNombre.value = cliente[''];
    contactoEmail.value = cliente[''];
    contactoTel.value = cliente[''];
    // contrasenna.value = cliente['contrasena'];
    foto.value = cliente['foto'];


};