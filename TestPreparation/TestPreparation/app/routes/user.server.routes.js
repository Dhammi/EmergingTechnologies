// Load the 'users' controller
var users = require('../../app/controllers/users.server.controller');

// Define the routes module' method
module.exports = function (app) {
    // Set up the 'users' api routes 
    app.route('/api/users')
        .get(users.getAll)//displays a list of users
        .post(users.postUser);//create new user

    app.route('/api/users/:id')
        .put(users.putUser)//update user by id
        .get(users.getUser)//get user by id
        .delete(users.deleteUser);//delete user by id

    app.route('/users')
        .get(users.renderAll);//redirects to the user.html to displays a list of users 
        
    app.route('/users/new')
        .get(users.renderNewUser)//redirects to the newuser.html to diplay a form to insert new user

    app.route('/users/find')
        .get(users.renderFindUser)//redirects to the finduser.html to diplay a form to find user

    app.route('/users/delete')
        .get(users.renderDeleteUser)//redirects to the deleteuser.html to diplay a form to delete user

    app.route('/users/update')
        .get(users.renderUpdateUser)//redirects to the updateuser.html to diplay a form to update user
};