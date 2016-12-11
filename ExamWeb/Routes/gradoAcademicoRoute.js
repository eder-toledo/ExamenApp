gradoAcademicoRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'gradosAcademicos/';

    sql = {};
    sql.attributes = { exclude: ['createdAt', 'updatedAt'] };
    function allGradosAcademicos(req, res, next) {
        db.ex_GradoAcademico.findAll(sql).then(function (gradosAcademicos) {
            var data = {};
            if (!gradosAcademicos) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Academic grade not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = gradosAcademicos;
                data.count = gradosAcademicos.length;
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

    function gradosAcademicosById(req, res, next) {
        sql.where = { idGrado: req.params.id };
        db.ex_Carrera.find(sql).then(function (gradosAcademicos) {
            data = {};
            if (!gradosAcademicos) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Academic grade not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = gradosAcademicos;
                data.count = gradosAcademicos.length;
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

    server.get(urlRoute, allGradosAcademicos);
    server.get(urlRoute + ':id', gradosAcademicosById);
}