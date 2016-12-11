paisesRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'paises/';

    sql = {};
    sql.attributes = { exclude: ['createdAt', 'updatedAt'] };

    function allPaises(req, res, next) {
        db.ex_Pais.findAll(sql).then(function (paises) {
            var data = {};
            if (!paises) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Countries not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = paises;
                data.count = paises.length;
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

    function paisesById(req, res, next) {
        sql.where = { idpais: req.params.id };
        db.ex_Pais.find(sql).then(function (paises) {
            data = {};
            if (!paises) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Countries not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = paises;
                data.count = paises.length;
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

    server.get(urlRoute, allPaises);
    server.get(urlRoute + ':id', paisesById);
}