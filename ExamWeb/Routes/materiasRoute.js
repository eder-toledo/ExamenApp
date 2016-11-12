materiasRoute = function (server, db, Sequelize, apiUrl) {
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
        res.send("hello" + req.params.id);
        next();
    }

    server.get(apiUrl + 'materias/', allMaterias);
    server.get(apiUrl + 'materias/:id', materiaById);
}