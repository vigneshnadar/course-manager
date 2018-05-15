(function () {
    var $username, $pwd, $verifypwd;
    var $registerBtn;
    var userService = new UserService();
    $(main);

    function main() {

        $username =$("#username");
        $pwd=$("#pwd");
        $verifypwd=$("#v-pwd");
        $registerBtn=$("#registerBtn");
        $dob=$("#dob");

        $("#registerBtn")
            .click(register);

        // findUserById(12);
    }


    function register() {
        var user = {
            username: $username.val(),
            password: $pwd.val()
        }

        console.log(user);

        userService
            .register(user)
            .then(success);
    }

    function success() {
        alert("success");
    }


})();
