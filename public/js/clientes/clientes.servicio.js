'use strict';
function registrarCliente(paInfoClientes){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarClientes',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{          
              nombre : paInfoClientes[0],
              cedula : paInfoClientes[1],
              telefono : paInfoClientes[2],
              correo : paInfoClientes[3],
              contrasenna: paInfoClientes[4],
              contacto: paInfoClientes[5],
              foto : paInfoClientes[6]
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });
      console.log(respuesta);
      return respuesta;
}


function obtenerListaClientes(){
  let listaClientes = [];

  let respuesta = '';
  let peticion = $.ajax({
      url : 'http://localhost:4000/api/listarClientes',
      type : 'get',
      contentType : 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async : false,
      data:{
          
      }
    });
  
    peticion.done(function(response){
     respuesta = response;
    });
  
    peticion.fail(function(response){
     
    });

    return respuesta;
  
  return listaClientes;
}

function filtrarClientes(cTipo,cValor){
  let listaClientes = [];

  let respuesta = '';
  let peticion = $.ajax({
      url : 'http://localhost:4000/api/filtrarClientes',
      type : 'post',
      contentType : 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async : false,
      data:{
          tipo: cTipo,
          valor: cValor
      }
    });
  
    peticion.done(function(response){
     respuesta = response;
    });
  
    peticion.fail(function(response){
     
    });

    return respuesta;
  
    return listaClientes;
}

function actualizarPersona(pid, sNombre, sNumCed, sEmail, sTelefono, nEdad, sContacto, imagenUrl) {
  let respuesta = '';
  let peticion = $.ajax({
    url: 'http://localhost:4000/api/actualizarClientes',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType: 'json',
    async: false,
    data: {
      _id: pid,
      nombre_completo: sNombre,
      cedula: sNumCed,
      correo: sEmail,
      telefono: sTelefono,
      edad: nEdad,
      contacto: sContacto,
      foto: imagenUrl
    }
  });

  peticion.done(function (response) {
    respuesta = response;
  });

  peticion.fail(function (response) {

  });

  return respuesta;
};

function borrarPersonaPorId(pid) {
  let respuesta = '';
  let peticion = $.ajax({
    url: 'http://localhost:4000/api/borrarCliente',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType: 'json',
    async: false,
    data: {
      _id: pid
    }
  });

  peticion.done(function (response) {
    respuesta = response;
  });

  peticion.fail(function (response) {

  });

  return respuesta;
}