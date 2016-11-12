periodosRoute = function (server, db, Sequelize, apiUrl) {
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

    server.get(apiUrl + 'periodos/', allPeriodos);
}