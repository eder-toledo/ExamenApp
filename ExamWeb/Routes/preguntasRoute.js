preguntasRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + '/preguntas';

    sql = {};
    sql.attributes = { exclude: ['createdAt', 'updatedAt'] };

    function allPreguntas(req, res, next) {
        db.ex_Pregunta.findAll(sql).then(function (preguntas) {
            var data = {};
            if (!preguntas) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Questions not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = preguntas;
                data.count = preguntas.length;
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

    function preguntasById(req, res, next) {

        sql.where = { idPregunta: req.params.id };

        if (req.params.include != null) {
            sql.include = [];
            relations = req.params.include.split('_');

            for (var i = 0; i < relations.length; i++){
                if (relations[i] = 'examen') {
                    sql.include[i] = {};
                    sql.include[i].model = ex_Examen;
                    sql.include[i].as = 'ex_Examen';
                    sql.include[i].attributes = { exclude: ['createdAt', 'updatedAt'] };
                    sql.include[i].include = [];
                    sql.include[i].include[0] = {};
                    sql.include[i].include[0].model = db.ex_User;
                    sql.include[i].include[0].as = 'ex_User';
                    sql.include[i].include[0].attributes = { exclude: ['createdAt', 'updatedAt', 'estatus', 'password', 'ex_Estado_idEstado', 'localidad',] };
                    sql.include[i].include[1] = {};
                    sql.include[i].include[1].model = db.ex_Materia;
                    sql.include[i].include[1].as = 'ex_Materia';
                    sql.include[i].include[1].attributes = { exclude: ['createdAt', 'updatedAt', 'estatus'] };
                }
            }
        }

        db.ex_Pregunta.find(sql).then(function (preguntas) {
            data = {};
            if (!preguntas) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Questions not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = preguntas;
                data.count = preguntas.length;
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

    function preguntasByExamenId(req, res, next) {
        sql.where = { ex_Examen_idExamen: req.params.id };

        if (req.params.include != null) {
            sql.include = [];
            relations = req.params.include.split('_');

            for (var i = 0; i < relations.length; i++){
                if (relations[i] == 'tipoPregunta') {
                    sql.include[i] = {};
                    sql.include[i].model = ex_TipoPregunta;
                    sql.include[i].as = 'ex_TipoPregunta';
                    sql.include[i].attributes = { exclude: ['createdAt', 'updatedAt', 'estatus'] };
                }
            }
        }

        db.ex_Pregunta.find(sql).then(function (preguntas) {
            data = {};
            if (!preguntas) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Questions not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = preguntas;
                data.count = preguntas.length;
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

    server.get(urlRoute, allPreguntas);
    server.get(urlRoute + ':id', preguntasById);
    server.get(urlRoute + 'byTest/:id', preguntasByExamenId);
}