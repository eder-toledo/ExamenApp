tipoPreguntasRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'tipoPreguntas/';

    sql = {};
    sql.attributes = { exclude: ['createdAt', 'updatedAt'] };

    function allTipoPreguntas(req, res, next) {
        db.ex_TipoPregunta.findAll(sql).then(function (preguntas) {
            var data = {};
            if (!preguntas) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Type Questions not exist";
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

    function tipoPreguntasById(req, res, next) {
        sql.where = { idTipoPregunta: req.params.id };
        db.ex_TipoPregunta.find(sql).then(function (preguntas) {
            data = {};
            if (!preguntas) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Type Questions not exist";
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

    server.get(urlRoute, allTipoPreguntas);
    server.get(urlRoute + ':id', tipoPreguntasById);
}