usersRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'users/';

    var sql = {};
    sql.where = { estatus: "Activo"};
    sql.attributes = { exclude: ['createdAt', 'updatedAt', 'estatus', 'password', 'ex_Estado_idEstado'] };

    function allUsers(req, res, next) {
        db.ex_User.findAll(sql).then(function (users) {
            var data = {};
            if (!users) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "User with id " + req.params.id + " does not exist";
            } else {
                data.status = "success"
                data.code = "ResultsForSearch"
                data.data = users;
                data.count = users.length;
            }
            res.send(data);
            next();
        });
    }

    function usersById(req, res, next) {
        if (req.params.include != null) {
            sql.include = [];
            relations = req.params.include.split("_");
            for (i = 0; i < relations.length; i++){
                if (relations[i] == "datosAcademicos") {
                    sql.include[i] = {};
                    sql.include[i].model = db.ex_DatosAcademicos;
                    sql.include[i].attributes = { exclude: ['createdAt', 'updatedAt', 'ex_Grado_idGrado', 'ex_Carrera_idCarrera', 'ex_user_idUser'] };
                    sql.include[i].include = [];
                    sql.include[i].include[0] = {};
                    sql.include[i].include[0].model = db.ex_Carrera;
                    sql.include[i].include[0].attributes = { exclude: ['createdAt', 'updatedAt'] };
                    sql.include[i].include[1] = {};
                    sql.include[i].include[1].model = db.ex_GradoAcademico;
                    sql.include[i].include[1].attributes = { exclude: ['createdAt', 'updatedAt'] };
                } else if (relations[i] == "estado") {
                    sql.include[i] = {};
                    sql.include[i].model = db.ex_Estado;
                    sql.include[i].attributes = { exclude: ['createdAt', 'updatedAt', 'ex_Pais_idpais'] };
                    sql.include[i].include = [];
                    sql.include[i].include[0] = {};
                    sql.include[i].include[0].model = db.ex_Pais;
                    sql.include[i].include[0].attributes = { exclude: ['createdAt', 'updatedAt'] };
                }
            }
        }
        db.ex_User.find(sql).then(function (users) {
            data = {};
            if (!users) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "User with id " + req.params.id + " does not exist";
            } else {
                data.status = "success"
                data.code = "ResultsForSearch"
                data.data = users;
                data.count = users.length;
            }
            res.send(data);
            next();
        });
    }

    server.get(urlRoute, allUsers);
    server.get(urlRoute + ':id', usersById);
}