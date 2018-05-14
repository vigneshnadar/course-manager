

(function () {


    jQuery(main)

    var template;
    var tbody

    function main() {


        tbody = $('tbody');
        template = $('.template');

        $('#createUser').click(createUser);

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

        fetch('http://localhost:8080/api/user', {
            method : 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });
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