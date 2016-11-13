datosAcademicosRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'datosAcademicos/'
    function allDatosAcademicos(req, res, next) {
        db.ex_DatosAcademicos.findAll({
        }).then(function (datosAcademicos) {
            var data = {};
            if (!datosAcademicos) {
                data.error = "true";
            } else {
                data.data = datosAcademicos;
            }
            res.send(data);
            next();
        });
    }

    function datosAcademicosById(req, res, next) {
        db.ex_DatosAcademicos.find({
            where: {
                idDatosAcademicos: req.params.id
            }
        }).then(function (datosAcademicos) {
            data = {};
            if (!datosAcademicos) {
                data.error = "true";
            } else {
                data.data = datosAcademicos;
            }
            res.send(data);
            next();
        });
    }

    server.get(urlRoute, allDatosAcademicos);
    server.get(urlRoute + ':id', allDatosAcademicos);
}