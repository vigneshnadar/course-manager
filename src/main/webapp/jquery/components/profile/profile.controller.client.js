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

         var currentUser = userService.profile().then(profileUser);
          console.log(currentUser);
        $("#username").val(currentUser.username);

            $("#updateBtn")
            .click(updateProfile);

        $("#logoutBtn")
            .click(logout);

        // findUserById(222);
    }

    function profileUser(user) {
        console.log(user);
        $username.val(user.username);
        $phone.val(user.phone);
        $role.val(user.role);
        $dob.val(user.dateOfBirth);
        $staticEmail.val(user.email);
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
            alert("profile updated");
        // if(response == null){
        //     alert('failure');
        // }
        //
        // else alert('success');
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


    function logout() {


        userService
            .logout()
            .then(logoutsuccess);
    }

    function logoutsuccess() {
        alert("logoutsuccessful");
        window.location.href="../login/login.template.client.html";
    }

})();