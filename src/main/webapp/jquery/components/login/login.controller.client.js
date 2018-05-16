(function () {
    var $username, $password;
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
            .then(success);
    }

    function success(response) {
        console.log(response.body);
        if(response.body){
            alert("success");

        }
        else {
            alert("failure");
        }
    }


})();