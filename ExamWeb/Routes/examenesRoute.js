examenesRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'examenes/';

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

    function examenesById(req, res, next) {
        db.ex_Examen.find({
            where: {
                idExamen: req.params.id
            }
        }).then(function (examenes) {
            data = {};
            if (!examenes) {
                data.error = "true";
            } else {
                data.data = examenes;
            }
            res.send(data);
            next();
        });
    }

    server.get(urlRoute, allExamenes);
    server.get(urlRoute + ':id', examenesById);
}