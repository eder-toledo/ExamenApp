materiasRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'materias/';
    
    function allMaterias(req, res, next) {
        sql = {};
        sql.attributes = { exclude: ['createdAt', 'updatedAt'] };

        db.ex_Materia.findAll(sql).then(function (materias) {
            var data = {};
            if (!materias) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Materias not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = materias;
                data.count = materias.length;
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

    function materiaById(req, res, next) {
        sql = {};
        sql.attributes = { exclude: ['createdAt', 'updatedAt'] };
        sql.where = { idMateria: req.params.id };

        if (req.params.include != null) {
            sql.include = [];
            relations = req.params.include.split('_');

            for (var i = 0; i < relations.length; i++){
                if (relations[i] == 'grado') {
                    sql.include[i] = {};
                    sql.include[i].model = db.ex_Grado;
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

        db.ex_Materia.find(sql).then(function (materia) {
            data = {};
            if (!materia) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Materias not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = materia;
                data.count = materia.length;
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

    server.get(urlRoute, allMaterias);
    server.get(urlRoute + ':id', materiaById);
}