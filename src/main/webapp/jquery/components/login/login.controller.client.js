(function () {
    var $username, $password;
    var $registerBtn;
    var userService = new UserServiceClient();
    $(main);

    function main() {

        $username =$("#username");
        $pwd=$("#pwd");
        $verifypwd=$("#v-pwd");
        $dob=$("#dob");

        $("#loginBtn")
            .click(login);

        // findUserById(12);
    }


    function login() {
        var user = {
            username: $username.val(),
            password: $password.val()
        }

        console.log(user);

        userService
            .login(user)
            .then(success);
    }

    function success() {
        alert("success");
    }


})();
