// Load the 'User' Mongoose model
var User = require('mongoose').model('user');

// get the list of all the users
exports.getAll = function (req, res) {
    User.find(function (err, users) {
        if (err) {
            return res.send(err);
        }
        
        res.json(users);
    });
};

// Create a new user
exports.postUser = function (req, res) {
    var user = new User(req.body);
    
    user.save(function (err) {
        if (err) {
            return res.send(err);
        }
        
        res.send({ message: 'User Added' });
    });
};

//// Update the user by id
//exports.putUser = function (req, res) {
//    User.findOne({ id: req.params.id }, function (err, user) {
//        if (err) {
//            return res.send(err);
//        }
//        if (!user) {
//            res.json({ message: 'User not found' });
//        }
//        else {
            
//            //for (prop in req.body) {
//            //    user[prop] = req.body[prop];
//            //}
            
//            user.firstName = req.body.firstName;
//            user.lastName = req.body.lastName;
//            user.password = req.body.password;
            
//            // save the user
//            user.save(function (err) {
//                if (err) {
//                    return res.send(err);
//                }
                
//                res.json({ message: 'User updated successfully' });
//            });
//        }
//    });
//};

// Update the user
exports.putUser = function (req, res) {
    User.findOne({ email: req.params.id }, function (err, user) {
        if (err) {
            return res.send(err);
        }
        if (!user) {
            res.json({ message: 'User not found' });
        }
        else {
            
            //for (prop in req.body) {
            //    user[prop] = req.body[prop+1];
            //}
            
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.password = req.body.password;
            
            // save the user
            user.save(function (err) {
                if (err) {
                    return res.send(err);
                }
                
                res.json({ message: 'User updated successfully' });
            });
        }
    });
};

//// Get user by id
//exports.getUser = function (req, res) {
//    User.findOne({ _id: req.params.id }, function (err, user) {
//        if (err) {
//            return res.send(err);
//        }
//        res.json(user);
//    });
//};

// Get user by email
exports.getUser = function (req, res) {
    User.findOne({ email: req.params.id }, function (err, user) {
        if (err) {
            return res.send(err);
        }
        res.json(user);
    });
};

//// Delete user by id
//exports.deleteUser = function (req, res) {
//    User.findOne({ _id: req.params.id }, function (err, user) {
//        if (err) {
//            return res.send(err);
//        }
//        if (!user) {
//            res.json({ message: 'User not found' });
//        }
//        else {
//            User.remove({
//                _id: req.params.id
//            }, function (err, user) {
//                if (err) {
//                    return res.send(err);
//                }
                
//                res.json({ message: 'User successfully deleted' });
//            });
//        }
//    });
//};

//delete user by email
exports.deleteUser = function (req, res) {
    User.findOne({ email: req.params.id }, function (err, user) {
        if (err) {
            return res.send(err);
        }
        if (!user) {
            res.json({ message: 'User not found' });
        }
        else {
            User.remove({
                email: req.params.id
            }, function (err, user) {
                if (err) {
                    return res.send(err);
                }
                
                res.json({ message: 'User successfully deleted' });
            });
        }
    });
};

// Render to user.html
exports.renderAll = function (req, res) {
    res.render('user.html', { title: 'Users'});
};

// Render to newuser.html
exports.renderNewUser = function (req, res) {
    res.render('newuser.html', { title: 'New User' });
};

// Render to finduser.html
exports.renderFindUser = function (req, res) {
    res.render('finduser.html', { title: 'Find User' });
};

// Render to deleteuser.html
exports.renderDeleteUser = function (req, res) {
    res.render('deleteuser.html', { title: 'Delete User' });
};

// Render to updateuser.html
exports.renderUpdateUser = function (req, res) {
    res.render('updateuser.html', { title: 'Update User' });
};