nivelesRoute = function (server, db, Sequelize, apiUrl) {
    function allNiveles(req, res, next) {
        db.ex_Nivel.findAll({
        }).then(function (niveles) {
            var data = {};
            if (!niveles) {
                data.error = "true";
            } else {
                data.data = niveles;
            }
            res.send(data);
            next();
        });
    }

    server.get(apiUrl + 'niveles/', allNiveles);
}