'use strict'

const clienteModel = require('./clientes.model');



module.exports.registrar = function(req,res){
    let nuevoCliente = new clienteModel({
        nombre:req.body.nombre,
        cedula:req.body.cedula,
        telefono:req.body.telefono,
        correo:req.body.correo,
        contrasena:req.body.contrasena,
        foto: req.body.foto,
        contacto:req.body.contacto,
        activado:"0"
    });
    nuevoCliente.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el cliente, ocurrió el siguiente error' + error});
        }else{
            res.json({success : true, msg : 'El cliente se registró con éxito'});
        }
    });
};

module.exports.listar = function(req,res){
    clienteModel.find().then(
        function(clientes){
            res.send(clientes);
        }
    );
};

module.exports.filtrar = function(req, res){
    switch(req.body.tipo)
    {
        case "1":
        clienteModel.find(
            {
                "nombre":   {  
                                $regex: new RegExp(req.body.valor, "ig")
                            } 
            }
            ).then(
                function(clientes){
                    res.send(clientes);
                });
        break;

        case "2":
        clienteModel.find(
            {
                "cedula":   {  
                                $regex: new RegExp(req.body.valor, "ig")
                            } 
            }
            ).then(
                function(clientes){
                    res.send(clientes);
                });
        break;

        case "3":
        clienteModel.find(
            {
                "telefono": req.body.valor
            }
            ).then(
                function(clientes){
                    res.send(clientes);
                });
        break;

        case "4":
        clienteModel.find(
            {
                "correo": req.body.valor
            }
            ).then(
                function(clientes){
                    res.send(clientes);
                });
        break;
    }
};

module.exports.actualizar = function (req, res) {
    let actualizarCliente = new clienteModel({
        nombre: req.body.nombre,
        cedula: req.body.cedula,
        telefono: req.body.telefono,
        correo: req.body.correo,
        // contrasena: req.body.contrasena,
        foto: req.body.foto,
        contacto: req.body.contacto,
        activado: "0"
    });
    actualizarCliente.save(function (error) {
        if (error) {
            res.json({ success: false, msg: 'No se pudo actualizar el cliente, ocurrió el siguiente error' + error });
        } else {
            res.json({ success: true, msg: 'El cliente se actualizó con éxito' });
        }
    });
};

module.exports.borrar = function (req, res) {
    clienteModel.find().then(
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo modificar el cliente, ocurrió el siguiente error' + error });
            } else {
                res.json({ success: true, msg: 'El cliente se modificó con éxito' });
            }
        }
    );
};