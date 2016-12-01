gradoAcademicoRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'gradosAcademicos/';

    sql = {};
    sql.attributes = { exclude: ['createdAt', 'updatedAt'] };
    function allGradosAcademicos(req, res, next) {
        db.ex_GradoAcademico.findAll(sql).then(function (gradosAcademicos) {
            var data = {};
            if (!gradosAcademicos) {
                data.error = "true";
            } else {
                data.data = gradosAcademicos;
            }
            res.send(data);
            next();
        });
    }

    function gradosAcademicosById(req, res, next) {
        sql.where = { idGrado: req.params.id };
        db.ex_Carrera.find(sql).then(function (gradosAcademicos) {
            data = {};
            if (!gradosAcademicos) {
                data.error = "true";
            } else {
                data.data = gradosAcademicos;
            }
            res.send(data);
            next();
        });
    }

    server.get(urlRoute, allGradosAcademicos);
    server.get(urlRoute + ':id', gradosAcademicosById);
}