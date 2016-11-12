paisesRoute = function (server, db, Sequelize, apiUrl) {
    function allPaises(req, res, next) {
        db.ex_Pais.findAll({
        }).then(function (paises) {
            var data = {};
            if (!paises) {
                data.error = "true";
            } else {
                data.data = paises;
            }
            res.send(data);
            next();
        });
    }

    server.get(apiUrl + 'paises/', allPaises);
}