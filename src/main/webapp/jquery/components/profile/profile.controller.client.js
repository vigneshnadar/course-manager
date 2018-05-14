(function () {

    $(init);

    var $staticEmail;
    var $firstName;
    var $lastName;

    var userService = new UserServiceClient();

    function init() {

         $staticEmail =$("#staticEmail");
         $firstName=$("#firstName");
         $lastName=$("#lastName");

        findUserById(12);
    }


    function findUserById(userId) {
       userService
           .findUserById(userId)
           .then(renderUser);
    }


    function renderUser(user) {
        console.log(user);
        // $staticEmail.val(user.email);
        $staticEmail.val("xyz@gmail.com");
        $firstName.val(user.firstName);
        $lastName.val(user.lastName);

    }

})();