﻿carrerasRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'carreras/';

    var sql = {};
    sql.attributes = { exclude: ['createdAt', 'updatedAt'] };

    function allCarreras(req, res, next) {
        db.ex_Carrera.findAll(sql).then(function (carreras) {
            var data = {};
            if (!carreras) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Users not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = carreras;
                data.count = carreras.length;
            }
            res.send(data);
            next();
        }, function (err) {
            data = {};
            data.estatus = "error";
            data.code = "SearchNotExecuted";
            data.error = err;
            res.send(data);
            next();
        });
    }

    function carreraById(req, res, next) {
        sql.where = { idCarrera: req.params.id };
        db.ex_Carrera.find(sql).then(function (carrera) {
            data = {};
            if (!carrera) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Users not exist";
            } else {
                data.status = "success"
                data.code = "ResultsForSearch"
                data.data = carrera;
                data.count = carrera.length;
            }
            res.send(data);
            next();
        }, function (err) {
            data = {};
            data.estatus = "error";
            data.code = "SearchNotExecuted";
            data.error = err;
            res.send(data);
            next();
        });
    }

    server.get(urlRoute, allCarreras);
    server.get(urlRoute + ':id', carreraById);
}