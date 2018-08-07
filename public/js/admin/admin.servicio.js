'use strict';

function registrarEstudiante(estudiante){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarEstudiante',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            nombre: estudiante[0],
            cedula: estudiante[1],
            telefono: estudiante[2],
            correo: estudiante[3],
            fechaNc: estudiante[4],
            direccion: estudiante[5],
            contactoEmer: estudiante[6],
            telEmer: estudiante[7],
            foto: estudiante[8],
            contrasena: Math.random().toString(36).substring(7)
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


function obtenerListaEstudiantes(){
    let listaEstudiantes = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listarEstudiantes',
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
    
    return listaEstudiantes;
}


function filtrarEstudiantes(cTipo,cValor){
    let listaEstudiantes = [];
  
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/filtrarEstudiantes',
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
    
    return listaEstudiantes;
  }


function registrarCliente(cliente){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarCliente',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            nombre: cliente[0],
            cedula: cliente[1],
            telefono: cliente[2],
            correo: cliente[3],
            contacto:{
                nombre:cliente[4],
                correo:cliente[5],
                telefono:cliente[6]
            },
            foto: cliente[7],
            contrasena: Math.random().toString(36).substring(7)
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

function obtenerPersonaPorId(pid) {
    let persona = '';

    let peticion = $.ajax({
        url: 'http://localhost:4000/api/buscarClientes_id',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            id: pid
        }
    });

    peticion.done(function (response) {
        persona = response;
    });

    peticion.fail(function (response) {

    });
    return persona;
};

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

function actualizarCliente(id, sNombre, sCed, nTel, sCorreo, sContNom, sContEmail, nContTel, sContrasenna, foto) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/actualizarClientes',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            _id: id,
            nombre: sNombre,
            cedula: sCed,
            telefono: nTel,
            correo: sCorreo,
            contacto: {
                nombre: sContNom,
                correo: sContEmail,
                telefono: nContTel
            },
            foto: foto
            // contrasena: sContrasenna
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {

    });

    return respuesta;
};

function registrarProfesor(profesor){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarProfesor',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            nombre:profesor[0],
            cedula:profesor[1],
            telefono:profesor[2],
            correo:profesor[3],
            profesion:profesor[4],
            experiencia:profesor[5],
            fechaNacimiento:profesor[6],
            foto:profesor[7],
            direccion:profesor[8],
            contrasena: Math.random().toString(36).substring(7)
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


function obtenerListaProfesores(){
    let listaProfesores = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listarProfesores',
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
    
    return listaProfesores;
}


function filtrarProfesores(cTipo,cValor){
    let listaProfesores = [];
  
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/filtrarProfesores',
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
    
    return listaProfesores;
}

function registrarProyecto(proyecto){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarProyecto',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            nombre: proyecto[0],
            cedula: proyecto[1],
            telefono: proyecto[2],
            correo: proyecto[3],
            contacto:{
                nombre:proyecto[4],
                correo:proyecto[5],
                telefono:proyecto[6]
            },
            foto: proyecto[7],
            contrasena: Math.random().toString(36).substring(7)
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

function obtenerListaProyectos(){
    let listaProyectos = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listarProyectos',
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
    
    return listaProyectos;
}


function filtrarProyectos(cTipo,cValor){
    let listaProyectos = [];
  
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/filtrarProyectos',
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
    
    return listaProyectos;
}
