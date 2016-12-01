gradosRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'grados/';

    sql = {};
    sql.attributes = { exclude: ['createdAt', 'updatedAt'] };

    function allGrados(req, res, next) {
        db.ex_Grado.findAll(sql).then(function (grados) {
            var data = {};
            if (!grados) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Users not exist";
            } else {
                data.status = "success"
                data.code = "ResultsForSearch"
                data.data = grados;
                data.count = grados.length;
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

    function gradosById(req, res, next) {
        sql.where = { idGrado: req.params.id };

        if (req.params.include != null) {
            sql.include = [];
            relations = req.params.include.split('_');
            for (var i = 0; i < relations.length; i++){
                if (relations[i] == 'nivel') {
                    sql.include[i] = {};
                    sql.include.model = db.ex_Nivel;
                    sql.include.as = 'ex_Nivel';
                    sql.include[i].attributes = { exclude: ['createdAt', 'updatedAt'] };
                }
            }
        }

        db.ex_Grado.find(sql).then(function (grados) {
            data = {};
            if (!grados) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Users not exist";
            } else {
                data.status = "success"
                data.code = "ResultsForSearch"
                data.data = grados;
                data.count = grados.length;
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

    server.get(urlRoute, allGrados);
    server.get(urlRoute + ':id', gradosById);
}