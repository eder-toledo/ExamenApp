carrerasRoute = function (server, db, Sequelize, apiUrl) {
    function allCarreras(req, res, next) {
        db.ex_Carrera.findAll({

        }).then(function (carreras) {
            var data = {};
            if (!carreras) {
                data.error = "true";
            } else {
                data.data = carreras;
            }
            res.send(data);
            next();
            });
    }

    server.get(apiUrl + 'carreras/', allCarreras);
}