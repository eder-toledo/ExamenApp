gradoAcademicoRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'gradosAcademicos/';

    function allGradosAcademicos(req, res, next) {
        db.ex_GradoAcademico.findAll({
        }).then(function (gradosAcademicos) {
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
        db.ex_Carrera.find({
            where: {
                idGrado: req.params.id
            }
        }).then(function (gradosAcademicos) {
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