paisesRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'paises/';

    function allPaises(req, res, next) {
        db.ex_Pais.findAll({
        }).then(function (paises) {
            var data = {};
            if (!paises) {
                data.error = "true";
            } else {
                data.data = paises;
            }
            res.send(data);
            next();
        });
    }

    function paisesById(req, res, next) {
        db.ex_Pais.find({
            where: {
                idpais: req.params.id
            }
        }).then(function (paises) {
            data = {};
            if (!paises) {
                data.error = "true";
            } else {
                data.data = paises;
            }
            res.send(data);
            next();
        });
    }

    server.get(urlRoute, allPaises);
    server.get(urlRoute + ':id', paisesById);
}