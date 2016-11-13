estadosRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'estados/';
    function allEstados(req, res, next) {
        db.ex_Estado.findAll({
        }).then(function (estados) {
            var data = {};
            if (!estados) {
                data.error = "true";
            } else {
                data.data = estados;
            }
            res.send(data);
            next();
        });
    }

    function estadosById(req, res, next) {
        db.ex_Estado.find({
            where: {
                idEstado: req.params.id
            }
        }).then(function (estados) {
            data = {};
            if (!estados) {
                data.error = "true";
            } else {
                data.data = estados;
            }
            res.send(data);
            next();
        });
    }

    server.get(urlRoute, allEstados);
    server.get(urlRoute + ':id', estadosById);
}