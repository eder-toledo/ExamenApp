gradoAcademicoRoute = function (server, db, Sequelize, apiUrl) {
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

    server.get(apiUrl + 'gradosAcademicos/', allGradosAcademicos);
}