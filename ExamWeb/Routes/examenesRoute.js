examenesRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'examenes/';
    
    function allExamenes(req, res, next) {
        sql = {};
        sql.attributes = { exclude: ['createdAt', 'updatedAt'] };

        db.ex_Examen.findAll(sql).then(function (examanes) {
            var data = {};
            if (!examanes) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Tests not exist";
            } else {
                data.status = "success"
                data.code = "ResultsForSearch"
                data.data = examanes;
                data.count = examanes.length;
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

    function examenById(req, res, next) {
        sql = {};
        sql.attributes = { exclude: ['createdAt', 'updatedAt'] };
        sql.where = { idExamen: req.params.id };

        if (req.params.include != null) {
            sql.include = [];
            relations = req.params.include.split('_');
            for (var i = 0; i < relations.length; i++){
                if (relations[i] == 'user') {
                    sql.include[i] = {};
                    sql.include[i].model = db.ex_User;
                    sql.include[i].as = 'ex_User';
                    sql.include[i].attributes = { exclude: ['createdAt', 'updatedAt', 'estatus', 'password', 'ex_Estado_idEstado', 'localidad',] };
                } else if (relations[i] == 'materia') {
                    sql.include[i] = {};
                    sql.include[i].model = db.ex_Materia;
                    sql.include[i].as = 'ex_Materia';
                    sql.include[i].attributes = { exclude: ['createdAt', 'updatedAt', 'estatus'] };
                    sql.include[i].include = [];
                    sql.include[i].include[0] = {};
                    sql.include[i].include[0].model = db.ex_Grado;
                    sql.include[i].include[0].as = 'ex_Grado';
                    sql.include[i].include[0].attributes = { exclude: ['createdAt', 'updatedAt'] };
                    sql.include[i].include[0].include = [];
                    sql.include[i].include[0].include[0] = {};
                    sql.include[i].include[0].include[0].model = db.ex_Nivel;
                    sql.include[i].include[0].include[0].as = 'ex_Nivel';
                    sql.include[i].include[0].include[0].attributes = { exclude: ['createdAt', 'updatedAt', 'estatus'] };
                }
            }
        }

        db.ex_Examen.find(sql).then(function (examenes) {
            data = {};
            if (!examenes) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Tests not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = examenes;
                DataCue.count = examenes.count;
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

    function examenesByIduser(req, res, next) {
        sql = {};
        sql.attributes = { exclude: ['createdAt', 'updatedAt'] };
        sql.where = { ex_User_idUser: req.params.id };

        if (req.params.include != null) {
            sql.include = [];
            relations = req.params.include.split('_');
            for (var i; i < relations.length; i++){
                if (relations[i] == 'materia') {
                    sql.include[i] = {};
                    sql.include[i].model = db.ex_Materia;
                    sql.include[i].as = 'ex_Materia';
                    sql.include[i].attributes = { exclude: ['createdAt', 'updatedAt', 'estatus'] };
                    sql.include[i].include = [];
                    sql.include[i].include[0] = {};
                    sql.include[i].include[0].model = db.ex_Grado;
                    sql.include[i].include[0].as = 'ex_Grado';
                    sql.include[i].include[0].attributes = { exclude: ['createdAt', 'updatedAt'] };
                    sql.include[i].include[0].include = [];
                    sql.include[i].include[0].include[0] = {};
                    sql.include[i].include[0].include[0].model = db.ex_Nivel;
                    sql.include[i].include[0].include[0].as = 'ex_Nivel';
                    sql.include[i].include[0].include[0].attributes = { exclude: ['createdAt', 'updatedAt', 'estatus'] };
                }
            }
        }

        db.ex_Examen.find(sql).then(function (examenes) {
            data = {};
            if (!examenes) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Users not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = examenes;
                DataCue.count = examenes.count;
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

    server.get(urlRoute, allExamenes);
    server.get(urlRoute + ':id', examenById);
    server.get(urlRoute + 'byUser/:id', examenesByIduser);
}