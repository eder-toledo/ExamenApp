respuestasRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'respuestas/';

    function allRespuestas(req, res, next) {
        sql = {};
        sql.attributes = { exclude: ['createdAt', 'updatedAt'] };

        db.ex_Respuesta.findAll(sql).then(function (respuestas) {
            var data = {};
            if (!respuestas) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Answers not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = respuestas;
                data.count = respuestas.length;
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

    function respuestasById(req, res, next) {
        sql = {};
        sql.attributes = { exclude: ['createdAt', 'updatedAt'] };
        sql.where = { idRespuesta: req.params.id };

        if (req.params.include != null) {
            sql.include = [];
            relations = req.params.include.split('_');

            if (relations[i] == 'tipoRespuesta') {
                sql.include[i] = {};
                sql.include[i].model = ex_TipoRespuesta;
                sql.include[i].as = 'ex_TipoRespuesta';
                sql.include[i].attributes = { exclude: ['createdAt', 'updatedAt'] };
            }
        }

        db.ex_Respuesta.find(sql).then(function (respuestas) {
            data = {};
            if (!respuestas) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Answers not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = respuestas;
                data.count = respuestas.length;
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

    function respuestasByPregunta(req, res, next) {
        sql = {};
        sql.attributes = { exclude: ['createdAt', 'updatedAt'] };
        sql.where = { ex_TipoRespuesta_idTipoRespuesta: req.params.id };

        if (req.params.include != null) {
            sql.include = [];
            relations = req.params.include.split('_');

            if (relations[i] == 'tipoRespuesta') {
                sql.include[i] = {};
                sql.include[i].model = ex_TipoRespuesta;
                sql.include[i].as = 'ex_TipoRespuesta';
                sql.include[i].attributes = { exclude: ['createdAt', 'updatedAt'] };
            }
        }

        db.ex_Respuesta.find(sql).then(function (respuestas) {
            data = {};
            if (!respuestas) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Answers not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = respuestas;
                data.count = respuestas.length;
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

    function saveRespuesta(req, res, next) {
        //Todo: Agregar validacion de campos para seguridad

        db.ex_Respuesta.create({
            respuesta: req.params.respuesta,
            ex_Pregunta_idPregunta: req.params.idPregunta,
            ex_TipoRespuesta_idTipoRespuesta: req.params.idTipoRespuesta
        }).then(function (respuesta) {
            data = {};
            if (carrera == null) {
                data.estatus = "error";
                data.code = "InsertNotExecuted";
                res.send(data);
                next();
            } else {
                data.status = "success"
                data.code = "InsertExcecute"
                data.data = respuesta;
                res.send(data);
                next();
            }
        }).catch(Sequelize.ValidationError, function (err) {
            data = {};
            data.estatus = "error";
            data.code = "InsertNotExecuted";
            data.error = err.message;
            res.send(data);
            next();
        }).catch(function (err) {
            data = {};
            data.estatus = "error";
            data.code = "InsertNotExecuted";
            data.error = err.message;
            res.send(data);
            next();
        }
            );
    }

    server.get(urlRoute, allRespuestas);
    server.get(urlRoute + ':id', respuestasById);
    server.get(urlRoute + 'byQuestion/:id', respuestasByPregunta);

    server.post(urlRoute, saveRespuesta);
}