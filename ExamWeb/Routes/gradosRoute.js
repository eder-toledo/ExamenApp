gradosRoute = function (server, db, Sequelize, apiUrl) {
    function allGrados(req, res, next) {
        db.ex_Grado.findAll({
        }).then(function (grados) {
            var data = {};
            if (!grados) {
                data.error = "true";
            } else {
                data.data = grados;
            }
            res.send(data);
            next();
        });
    }

    server.get(apiUrl + 'grados/', allGrados);
}