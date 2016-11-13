gradosRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'grados/';

    function allGrados(req, res, next) {
        db.ex_Grado.findAll({
        }).then(function (grados) {
            var data = {};
            if (!grados) {
                data.error = "true";
            } else {
                data.data = grados;
            }
            res.send(data);
            next();
        });
    }

    function gradosById(req, res, next) {
        db.ex_Grado.find({
            where: {
                idGrado: req.params.id
            }
        }).then(function (grados) {
            data = {};
            if (!grados) {
                data.error = "true";
            } else {
                data.data = grados;
            }
            res.send(data);
            next();
        });
    }

    server.get(urlRoute, allGrados);
    server.get(urlRoute + ':id', gradosById);
}