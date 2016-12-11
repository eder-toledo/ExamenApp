nivelesRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'niveles/';

    sql = {};
    sql.attributes = { exclude: ['createdAt', 'updatedAt'] };

    function allNiveles(req, res, next) {
        db.ex_Nivel.findAll(sql).then(function (niveles) {
            var data = {};
            if (!niveles) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Nivels not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = niveles;
                data.count = niveles.length;
            }
            res.send(data);
            next();
        }, function (err) {
            data = {};
            data.estatus = "error";
            data.code = "SearchNotExecuted";
            data.error = err;
            res.send(data);
            next();
        });
    }

    function nivelesById(req, res, next) {
        sql = {};
        sql.attributes = { exclude: ['createdAt', 'updatedAt'] };
        sql.where = { idNivel: req.params.id };

        db.ex_Nivel.find(sql).then(function (niveles) {
            data = {};
            if (!niveles) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Nivels not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = niveles;
                data.count = niveles.length;
            }
            res.send(data);
            next();
        }, function (err) {
            data = {};
            data.estatus = "error";
            data.code = "SearchNotExecuted";
            data.error = err;
            res.send(data);
            next();
        });
    }

    server.get(urlRoute, allNiveles);
    server.get(urlRoute + ':id', nivelesById);
}