usersRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'users/';

    function allUsers(req, res, next) {
        db.ex_User.findAll({
        }).then(function (users) {
            var data = {};
            if (!users) {
                data.error = "true";
            } else {
                data.data = users;
            }
            res.send(data);
            next();
        });
    }

    function usersById(req, res, next) {
        db.ex_User.find({
            where: {
                idUser: req.params.id
            },
            include: [db.ex_DatosAcademicos]
        }).then(function (users) {
            data = {};
            if (!users) {
                data.error = "true";
            } else {
                data.data = users;
            }
            res.send(data);
            next();
        });
    }

    server.get(urlRoute, allUsers);
    server.get(urlRoute + ':id', usersById);
}