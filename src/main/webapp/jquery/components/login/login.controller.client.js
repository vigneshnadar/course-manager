(function () {
    var $username, $pwd;
    var $registerBtn;
    var userService = new UserServiceClient();
    $(main);

    function main() {

        $username =$("#username");
        $pwd=$("#password");


        $("#loginBtn")
            .click(login);

        // findUserById(12);
    }


    function login() {

        console.log("inside login");
        var user = {
            username: $username.val(),
            password: $pwd.val()
        }

        console.log(user);

        userService
            .login(user)
            .then(test);
    }

    function test(response) {
        console.log(response);

        if(response.status == 409) {
        	alert(" username and password do match: login unsuccessfull");
        }
        else {
        	alert("login successful");
            window.location.href="../profile/profile.template.client.html";
            
        }
    }


})();
