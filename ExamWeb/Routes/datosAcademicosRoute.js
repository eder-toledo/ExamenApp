datosAcademicosRoute = function (server, db, Sequelize, apiUrl) {
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

    server.get(apiUrl + 'datosAcademicos/', allDatosAcademicos);
}