materiasRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'materias/'
    function allMaterias(req, res, next) {
        db.ex_Materia.findAll({
            include: [{
                model: db.ex_Grado,
                where: { state: Sequelize.col('ex_Materia.ex_Grado_idGrado') }
            }]
        }).then(function (materias) {
            var data = {};
            if (!materias) {
                data.error = "true";
            } else {
                data.data = materias;
            }
            res.send(data);
            next();
        });
    }

    function materiaById(req, res, next) {
        db.ex_Materia.find({
            where: {
                idMateria: req.params.id
            }
        }).then(function (materia) {
            data = {};
            if (!data) {
                data.error = "true";
            } else {
                data.data = materia;
            }
            res.send(data);
            next();
            });
    }

    server.get(urlRoute, allMaterias);
    server.get(urlRoute + ':id', materiaById);
}