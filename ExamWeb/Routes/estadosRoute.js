estadosRoute = function (server, db, Sequelize, apiUrl) {
    function allEstados(req, res, next) {
        db.ex_Estado.findAll({
        }).then(function (estados) {
            var data = {};
            if (!estados) {
                data.error = "true";
            } else {
                data.data = estados;
            }
            res.send(data);
            next();
        });
    }

    server.get(apiUrl + 'estados/', allEstados);
}