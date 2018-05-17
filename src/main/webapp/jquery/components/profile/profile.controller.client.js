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

         // var currentUser = userService.profile().then(profileUser);
         // console.log(currentUser);

            $("#updateBtn")
            .click(updateProfile);

        // findUserById(222);
    }

    function profileUser(user) {
        return user;
    }
    
    
    function updateProfile() {
        var user = {
            username: $username.val(),
            phone: $phone.val(),
            role: $role.val(),
            dateOfBirth: $dob.val(),
            email:$staticEmail.val()
        }

        console.log(user);

        // userService
        //     .updateUser(222, user)
        //     .then(success);

        userService
            .updateProfile(user)
            .then(success);
    }

    function success(response) {
        if(response == null){
            alert('failure');
        }

        else alert('success');
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