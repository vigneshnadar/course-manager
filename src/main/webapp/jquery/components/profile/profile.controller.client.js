(function () {

    $(init);

    var $staticEmail;
    var $username;
    var $phone;
    var $role;
    var $dob;
    var $updateBtn;

    var userService = new UserServiceClient();

    function init() {

         $staticEmail =$("#staticEmail");
         $username=$("#username");
         $phone=$("#phone");
         $role=$("#roleField");
         $dob=$("#dob");

            $("#updateBtn")
            .click(updateUser);

        findUserById(12);
    }
    
    
    function updateUser() {
        var user = {
            username: $username.val(),
            phone: $phone.val(),
            role: $role.val(),
            // dateOfBirth: $dob.val(),
            email:$staticEmail.val()
        }

        console.log(user);

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
        $staticEmail.val(user.email);
        $username.val(user.username);
        $phone.val(user.phone);

    }

})();