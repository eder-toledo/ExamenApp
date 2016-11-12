usersRoute = function (server, db, Sequelize, apiUrl) {
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

    server.get(apiUrl + 'users/', allUsers);
}