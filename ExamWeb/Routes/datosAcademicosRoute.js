datosAcademicosRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'datosAcademicos/';

    var sql = {};
    sql.attributes = { exclude: ['createdAt', 'updatedAt', 'ex_Grado_idGrado', 'ex_Carrera_idCarrera', 'ex_user_idUser'] };

    function allDatosAcademicos(req, res, next) {
        db.ex_DatosAcademicos.findAll(sql).then(function (datosAcademicos) {
            var data = {};
            if (!datosAcademicos) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Users not exist";
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
        sql.where = { idDatosAcademicos: req.params.id };
        db.ex_DatosAcademicos.find(sql).then(function (datosAcademicos) {
            data = {};
            if (!datosAcademicos) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Users not exist";
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

    server.get(urlRoute, allDatosAcademicos);
    server.get(urlRoute + ':id', allDatosAcademicos);
}