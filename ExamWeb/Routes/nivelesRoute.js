nivelesRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'niveles/';

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

    function nivelesById(req, res, next) {
        db.ex_Nivel.find({
            where: {
                idNivel: req.params.id
            }
        }).then(function (niveles) {
            data = {};
            if (!niveles) {
                data.error = "true";
            } else {
                data.data = niveles;
            }
            res.send(data);
            next();
        });
    }

    server.get(urlRoute, allNiveles);
    server.get(urlRoute + ':id', nivelesById);
}