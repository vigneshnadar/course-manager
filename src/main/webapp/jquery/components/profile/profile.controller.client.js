(function () {

    $(init);

    var $staticEmail;
    var $firstName;
    var $lastName;
    var $updateBtn;

    var userService = new UserServiceClient();

    function init() {

         $staticEmail =$("#staticEmail");
         $firstName=$("#firstName");
         $lastName=$("#lastName");
        $updateBtn=$("#updateBtn")
            .click(updateUser);

        findUserById(12);
    }
    
    
    function updateUser() {
        var user = {
            firstName: $firstName.val(),
            lastName: $lastName.val()
        }

        userService
            .updateUser(12, user)
            .then(success);
    }

    function success(response) {
        if(response == null){
            alert('failure');
        }

        alert('success');
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