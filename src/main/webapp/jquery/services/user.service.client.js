function UserServiceClient() {
    this.createUser = createUser;
   this.findAllUsers = findAllUsers;
   this.findUserById = findUserById;
  this.deleteUser = deleteUser;
   this.updateUser = updateUser;
   this.register = register;
  this.login = login;
  this.updateProfile = updateProfile;
  this.profile =profile;
  this.logout =logout;
    this.url = 'http://localhost:8080/api/user';
    this.registerUrl = 'http://localhost:8080/api/register';
    this.logonUrl = 'http://localhost:8080/api/login';
    this.profileUrl = 'http://localhost:8080/api/profile';
    this.logoutUrl = 'http://localhost:8080/api/logout';
//    this.newUrl =
//        'http://localhost:8080/api/login';
    var self = this;
    
    



    function deleteUser(userId) {
        return fetch(self.url+'/'+userId, {
            method : 'delete'});
    }
    
    function findAllUsers() {
        return fetch(self.url).then(function (response) {
            return response.json();
        });

    }


    function findUserById(userId) {
        return fetch(self.url+'/'+userId)
            .then(function (response) {
                return response.json();
            });
    }
    
    function createUser(user) {
        return fetch(self.url, {
            method : 'post',
            body: JSON.stringify(user),
            // credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            credentials: "same-origin"
        });
    }


    function updateUser(userId, user) {
        return fetch(self.url+'/'+userId, {
            method : 'put',
            body: JSON.stringify(user),
            // credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            credentials: "same-origin"
        }).then(function (response) {
            if(response.bodyUsed){
                return response.json();
            }

            return null;

        });
    }


    function updateProfile(user) {
        return fetch(self.profileUrl, {
            method : 'put',
            body: JSON.stringify(user),
            // credentials: 'same-origin',
            headers: {
                'content-type': 'application/json',

            },
            credentials: "same-origin"
        }).then(function (response) {
            if(response.bodyUsed){
                return response.json();
            }

            return null;

        });
    }


    function register(user) {

        if(user.password != user.verifypassword) {
            user.username = 'pwdmatchfail';
        }

            return fetch(self.registerUrl, {
                method : 'post',
                body: JSON.stringify(user),
                // credentials: 'same-origin',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: "same-origin"
            });
            

    }


    function login(user) {
        return fetch(self.logonUrl, {
            method : 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "same-origin"
        });
        //     .then(function (response) {
        //     console.log(response);
        //     return response.json();
        // });

    }

    function profile() {
        return fetch(self.profileUrl,{
            method: 'get',
            credentials: "same-origin"
        }).then(function (response) {
            return response.json();
        });
        //
        //         //     .then(function (response) {
        //         //     return response.json();
        //         // });
    }


    function logout() {
        return fetch(self.logoutUrl, {
            method : 'post',
            headers: {
                'content-type': 'application/json'
            },
            credentials: "same-origin"
        });

    }


}
