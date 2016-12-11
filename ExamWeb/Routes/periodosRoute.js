periodosRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'periodos/';

    sql = {};
    sql.attributes = { exclude: ['createdAt', 'updatedAt'] };

    function allPeriodos(req, res, next) {
        db.ex_Periodo.findAll(sql).then(function (periodos) {
            var data = {};
            if (!periodos) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Periods not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = periodos;
                data.count = periodos.length;
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

    function periodosById(req, res, next) {

        sql.where = { idPeriodo: req.params.id };

        if (req.params.include != null) {
            sql.include = [];
            relations = req.params.include.split('_');

            for (var i = 0; i < relations.length; i++){
                if (relations[i] == 'grado') {
                    sql.include[i] = {};
                    sql.include[i].model = ex_Grado;
                    sql.include[i].as = 'ex_Grado';
                    sql.include[i].attributes = { exclude: ['createdAt', 'updatedAt'] };
                    sql.include[i].include = [];
                    sql.include[i].include[0] = {};
                    sql.include[i].include[0].model = db.ex_Nivel;
                    sql.include[i].include[0].as = 'ex_Nivel';
                    sql.include[i].include[0].attributes = { exclude: ['createdAt', 'updatedAt'] };
                }
            }
        }

        db.ex_Periodo.find(sql).then(function (periodos) {
            data = {};
            if (!periodos) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Periods not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = periodos;
                data.count = periodos.length;
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

    server.get(urlRoute, allPeriodos);
    server.get(urlRoute + ':id', periodosById);
}