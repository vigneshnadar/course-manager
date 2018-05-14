

(function () {


    jQuery(main)

    var template;
    var tbody;

    var userService = new UserServiceClient();

    function main() {


        tbody = $('tbody');
        template = $('.template');

        $('#createUser').click(createUser);

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

    function editUser(event) {
        console.log('edit');

    }

})();