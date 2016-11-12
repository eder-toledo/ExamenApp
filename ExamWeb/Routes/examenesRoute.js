examenesRoute = function (server, db, Sequelize, apiUrl) {
    function allExamenes(req, res, next) {
        db.ex_Examen.findAll({
        }).then(function (examanes) {
            var data = {};
            if (!examanes) {
                data.error = "true";
            } else {
                data.data = examanes;
            }
            res.send(data);
            next();
        });
    }

    server.get(apiUrl + 'examenes/', allExamenes);
}