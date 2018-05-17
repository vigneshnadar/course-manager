(function () {
    var $username, $pwd, $verifypwd;
    var $registerBtn;
    var userService = new UserServiceClient();
    $(main);

    function main() {

        $username =$("#username");
        $pwd=$("#pwd");
        $verifypwd=$("#v-pwd");
        $dob=$("#dob");

        $("#signUpBtn")
            .click(register);

        // findUserById(12);
    }


    function register() {
        var user = {
            username: $username.val(),
            password: $pwd.val(),
            verifypassword : $verifypwd.val()
        }

        console.log(user);

        userService
            .register(user)
            .then(success);
    }

    function success(response) {
        console.log(response);
        if(response.status == 408) alert("password does not match");
        else if(response.status == 409) alert("User already exists : registration unsuccessful");
        else alert("success");
    }


})();
