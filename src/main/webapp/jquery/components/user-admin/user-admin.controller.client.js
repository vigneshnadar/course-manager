

(function () {


    jQuery(main)

    var template;
    var tbody;
    var selectedUserId;

    var userService = new UserServiceClient();

    function main() {


        tbody = $('tbody');
        template = $('.template');


        $('#createUser').click(createUser);
        $('#updateUser').click(updateUser);

        findAllUsers();

    }

    function findAllUsers() {
        userService
            .findAllUsers()
             .then(renderUsers);

    }


    function createUser() {
        console.log('xyz')

        var username = $('#usernameField').val();
        var password = $('#passwordField').val();
        var firstName = $('#firstnameField').val();
        var lastName = $('#lastnameField').val();
        var role = $('#roleField').val();

        var user = {
             username : username,
             password : password,
            firstName : firstName,
            lastName : lastName,
            role: role
        };

        console.log(user);


        userService
            .createUser(user)
            .then(findAllUsers);


    }

    function renderUsers(users) {

        tbody.empty();

        for(var i=0;i<users.length;i++){
            var user = users[i];

            var clone = template.clone();

            clone.attr('id',user.id);

            clone.find('.delete').click(deleteUser);
            clone.find('.edit').click(editUser);

            clone.find('.username')
                .html(user.username);
            clone.find('.firstname')
                .html(user.firstName);
            clone.find('.lastname')
                .html(user.lastName);
            clone.find('.role')
                .html(user.role);

            tbody.append(clone);
        }
    }


    function deleteUser(event) {

        var deleteBtn = $(event.currentTarget);
        var userId = deleteBtn.parent().parent().parent().attr('id');

        console.log(userId);


        userService
            .deleteUser(userId)
            .then(findAllUsers);

    }

    function findUserById(userId) {
        var selectedUser = userService
            .findUserById(userId)
            .then(renderUser);
    }

    function editUser(event) {
        console.log('edit');

        var editBtn = $(event.currentTarget);
        var userId = editBtn.parent().parent().parent().attr('id');
        selectedUserId=userId;

        console.log(userId);

        // var selectedUser = userService
        //                     .findUserById(userId)
        //                     .then(renderUser);
        findUserById(userId);
        console.log(selectedUser);



    }

    function renderUser(selectedUser) {
        $('#usernameField').val(selectedUser.username);
        $('#passwordField').val(selectedUser.password);
        $('#firstnameField').val(selectedUser.firstName);
        $('#lastnameField').val(selectedUser.lastName);
        $('#roleField').val(selectedUser.role);

    }


    function updateUser() {
        var username = $('#usernameField').val();
        var password = $('#passwordField').val();
        var firstName = $('#firstnameField').val();
        var lastName = $('#lastnameField').val();
        var role = $('#roleField').val();
        var userId = selectedUserId;
        console.log(userId);

        var user = {
            username : username,
            password : password,
            firstName : firstName,
            lastName : lastName,
            role: role
        };

        console.log(user);



        userService
            .updateUser(userId, user)
            .then(findAllUsers);
    }

    function success(response) {
        if(response == null){
            alert('failure');
        }

        alert('success');
    }

})();