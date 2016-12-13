datosAcademicosRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'datosAcademicos/';

    function allDatosAcademicos(req, res, next) {
        var sql = {};
        sql.attributes = { exclude: ['createdAt', 'updatedAt', 'ex_Grado_idGrado', 'ex_Carrera_idCarrera', 'ex_user_idUser'] };

        db.ex_DatosAcademicos.findAll(sql).then(function (datosAcademicos) {
            var data = {};
            if (!datosAcademicos) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Academic data not exist";
            } else {
                data.status = "success"
                data.code = "ResultsForSearch"
                data.data = datosAcademicos;
                data.count = datosAcademicos.length;
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

    function datosAcademicosById(req, res, next) {
        var sql = {};
        sql.attributes = { exclude: ['createdAt', 'updatedAt', 'ex_Grado_idGrado', 'ex_Carrera_idCarrera', 'ex_user_idUser'] };
        sql.where = { idDatosAcademicos: req.params.id };

        db.ex_DatosAcademicos.find(sql).then(function (datosAcademicos) {
            data = {};
            if (!datosAcademicos) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Academic data not exist";
            } else {
                data.status = "success"
                data.code = "ResultsForSearch"
                data.data = datosAcademicos;
                data.count = datosAcademicos.length;
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

    function saveDatosAcademicos(req, res, next) {
        //Todo: Agregar validacion de campos para seguridad

        db.ex_DatosAcademicos.create({
            ex_Grado_idGrado: req.params.idGrado,
            ex_Carrera_idCarrera: req.params.idCarrera,
            especialidad: req.params.especialidad,
            ex_user_idUser: req.params.idUser
        }).then(function (datosAcademicos) {
            data = {};
            if (datosAcademicos == null) {
                data.estatus = "error";
                data.code = "InsertNotExecuted";
                res.send(data);
                next();
            } else {
                data.status = "success"
                data.code = "InsertExcecute"
                data.data = datosAcademicos;
                res.send(data);
                next();
            }
            }).catch(Sequelize.ValidationError, function (err) {
                data = {};
                data.estatus = "error";
                data.code = "SearchNotExecuted";
                data.error = err.message;
                res.send(data);
                next();
            }).catch(function (err) {
                data = {};
                data.estatus = "error";
                data.code = "SearchNotExecuted";
                data.error = err.message;
                res.send(data);
                next();
            }
            );
    }

    server.get(urlRoute, allDatosAcademicos);
    server.get(urlRoute + ':id', allDatosAcademicos);

    server.post(urlRoute, saveDatosAcademicos);
}