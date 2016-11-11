materiasRoute = function (server, db, Sequelize) {
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
                data.error = "false";
                data.data = materias;
            }

            res.send(data);
            next();
        });
    }

    function materiaById(req, res, next) {
        res.send("hello" + req.params.id);
        nexxt();
    }

    server.get('/api/v1/materias/', allMaterias);
    server.get('/api/v1/materias/:id', materiaById);
}