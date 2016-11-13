periodosRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'periodos/';

    function allPeriodos(req, res, next) {
        db.ex_Periodo.findAll({
        }).then(function (periodos) {
            var data = {};
            if (!periodos) {
                data.error = "true";
            } else {
                data.data = periodos;
            }
            res.send(data);
            next();
        });
    }

    function periodosById(req, res, next) {
        db.ex_Periodo.find({
            where: {
                idPeriodo: req.params.id
            }
        }).then(function (periodos) {
            data = {};
            if (!periodos) {
                data.error = "true";
            } else {
                data.data = periodos;
            }
            res.send(data);
            next();
        });
    }

    server.get(urlRoute, allPeriodos);
    server.get(urlRoute + ':id', periodosById);
}