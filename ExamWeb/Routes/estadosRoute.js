estadosRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'estados/';

    sql = {};
    sql.attributes = { exclude: ['createdAt', 'updatedAt'] };

    function allEstados(req, res, next) {
        db.ex_Estado.findAll(sql).then(function (estados) {
            var data = {};
            if (!estados) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "State not exist";
            } else {
                data.status = "success"
                data.code = "ResultsForSearch"
                data.data = estados;
                data.count = estados.length;
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

    function estadosById(req, res, next) {
        sql.where = { idEstado: req.params.id };

        if (req.params.include != null) {
            sql.include = [];
            relations = req.params.include.split("_");
            for (i = 0; i < relations.length; i++){
                if (relations[i] == 'pais') {
                    sql.include[i] = {};
                    sql.include[i].model = db.ex_Pais;
                    sql.include[i].as = 'ex_Pais';
                    sql.include[i].attributes = { exclude: ['createdAt', 'updatedAt'] };
                }
            }
        }

        db.ex_Estado.find(sql).then(function (estados) {
            data = {};
            if (!estados) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "State not exist";
            } else{
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = estados;
                data.count = estados.length;
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

    server.get(urlRoute, allEstados);
    server.get(urlRoute + ':id', estadosById);
}