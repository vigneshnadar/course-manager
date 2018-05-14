

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
        var promise = fetch('http://localhost:8080/api/user');

        promise.then(function (response) {
            return response.json();
        }).then(renderUsers);

    }


    function createUser() {
        console.log('xyz')

        var username = $('#usernameField').val();
        var password = $('#passwordField').val();
        var firstName = $('#firstnameField').val();
        var lastName = $('#lastnameField').val();

        var user = {
             username : username,
             password : password,
            firstName : firstName,
            lastName : lastName
        };


        userService
            .createUser(user)
            .then(findAllUsers);


    }

    function renderUsers(users) {

        for(var i=0;i<users.length;i++){
            var user = users[i];

            var clone = template.clone();

            clone.find('.username')
                .html(user.username);

            tbody.append(clone);




        }


    }

})();