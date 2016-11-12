carrerasRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'carreras/';

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

    function carreraById(req, res, next) {
        db.ex_Carrera.find({
            where: {
                idCarrera: req.params.id
            }
        }).then(function (carrera) {
            data = {};
            if (!data) {
                data.error = "true";
            } else {
                data.data = carrera;
            }
            res.send(data);
            next();
            });
    }

    server.get(urlRoute, allCarreras);
    server.get(urlRoute + ':id', carreraById);
}