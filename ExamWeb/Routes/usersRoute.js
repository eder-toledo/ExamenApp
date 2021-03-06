﻿usersRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'users/';

    function allUsers(req, res, next) {
        var sql = {};
        sql.where = { estatus: "Activo" };
        sql.attributes = { exclude: ['createdAt', 'updatedAt', 'estatus', 'password'] };

        db.ex_User.findAll(sql).then(function (users) {
            var data = {};
            if (!users) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Users not exist";
            } else {
                data.status = "success"
                data.code = "ResultsForSearch"
                data.data = users;
                data.count = users.length;
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

    function usersById(req, res, next) {
        var sql = {};
        sql.where = { estatus: "Activo" };
        sql.attributes = { exclude: ['createdAt', 'updatedAt', 'estatus', 'password'] };
        sql.where['idUser'] = req.params.id;

        if (req.params.include != null) {
            sql.include = [];
            relations = req.params.include.split("_");
            for (i = 0; i < relations.length; i++){
                if (relations[i] == "datosAcademicos") {
                    sql.include[i] = {};
                    sql.include[i].model = db.ex_DatosAcademicos;
                    sql.include[i].as = 'datosAcademicos';
                    sql.include[i].attributes = { exclude: ['createdAt', 'updatedAt', 'ex_Grado_idGrado', 'ex_Carrera_idCarrera', 'ex_user_idUser'] };
                    sql.include[i].include = [];
                    sql.include[i].include[0] = {};
                    sql.include[i].include[0].model = db.ex_Carrera;
                    sql.include[i].include[0].as = 'carrera';
                    sql.include[i].include[0].attributes = { exclude: ['createdAt', 'updatedAt'] };
                    sql.include[i].include[1] = {};
                    sql.include[i].include[1].model = db.ex_GradoAcademico;
                    sql.include[i].include[1].as = 'gradoAcademico';
                    sql.include[i].include[1].attributes = { exclude: ['createdAt', 'updatedAt'] };
                } else if (relations[i] == "estado") {
                    sql.include[i] = {};
                    sql.include[i].model = db.ex_Estado;
                    sql.include[i].as = 'estado';
                    sql.include[i].attributes = { exclude: ['createdAt', 'updatedAt', 'ex_Pais_idpais'] };
                    sql.include[i].include = [];
                    sql.include[i].include[0] = {};
                    sql.include[i].include[0].model = db.ex_Pais;
                    sql.include[i].include[0].as = 'pais';
                    sql.include[i].include[0].attributes = { exclude: ['createdAt', 'updatedAt'] };
                } else if (relations[i] == "examen") {
                    sql.include[i] = {};
                    sql.include[i].model = db.ex_Examen;
                    sql.include[i].as = 'examen'
                    sql.include[i].attributes = { exclude: ['createdAt', 'updatedAt', 'ex_Materia_idMateria', 'ex_periodo_idPeriodo', 'ex_User_iduser', 'estatus'] };
                    sql.include[i].include = [];
                    sql.include[i].include[0] = {};
                    sql.include[i].include[0].model = db.ex_Materia;
                    sql.include[i].include[0].as = 'materia';
                    sql.include[i].include[0].attributes = { exclude: ['createdAt', 'updatedAt', 'estatus', 'ex_Grado_idGrado'] };
                    sql.include[i].include[0].include = [];
                    sql.include[i].include[0].include[0] = {};
                    sql.include[i].include[0].include[0].model = db.ex_Grado;
                    sql.include[i].include[0].include[0].as = 'grado';
                    sql.include[i].include[0].include[0].attributes = { exclude: ['createdAt', 'updatedAt', 'ex_Nivel_idNivel'] };
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
        }, function (err) {
            data = {};
            data.estatus = "error";
            data.code = "SearchNotExecuted";
            data.error = err;
            res.send(data);
            next();
        });
    }

    function saveUser(req, res, next) {
        //Todo: Agregar validacion de campos para seguridad

        db.ex_User.create({
            nombre: req.params.nombreUser,
            sexo: req.params.sexo,
            edad: req.params.edad,
            email: req.params.email,
            localidad: req.params.localidad,
            ex_Estado_idEstado: req.params.idEstado,
            password: req.params.password
        }).then(function (user) {
            data = {};
            if (carrera == null) {
                data.estatus = "error";
                data.code = "InsertNotExecuted";
                res.send(data);
                next();
            } else {
                data.status = "success"
                data.code = "InsertExcecute"
                data.data = user;
                res.send(data);
                next();
            }
        }).catch(Sequelize.ValidationError, function (err) {
            data = {};
            data.estatus = "error";
            data.code = "InsertNotExecuted";
            data.error = err.message;
            res.send(data);
            next();
        }).catch(function (err) {
            data = {};
            data.estatus = "error";
            data.code = "InsertNotExecuted";
            data.error = err.message;
            res.send(data);
            next();
        }
            );
    }

    server.get(urlRoute, allUsers);
    server.get(urlRoute + ':id', usersById);

    server.post(urlRoute, saveUser);
}