// (function () {
//     var $email;
//     var userService = new UserServiceClient();
//     $(main);
//
//     function main() {
//
//         $email =$("#email");
//         $pwd=$("#password");
//
//
//         $("#resetBtn")
//             .click(sendEmail);
//
//         // findUserById(12);
//     }
//
//
//     function sendEmail() {
//
//         console.log("inside login");
//         var user = {
//             email : $email.val()
//         }
//
//         console.log(user);
//
//         userService
//             .login(user)
//             .then(success);
//     }
//
//     function success(response) {
//         console.log(response.body);
//         if(response.body){
//             alert("email sent");
//
//         }
//         else {
//             alert("failure while sending email. Please check email");
//         }
//     }
//
//
// })();
