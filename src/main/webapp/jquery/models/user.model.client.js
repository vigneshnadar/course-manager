function User(username, password, firstName, lastName) {

    this.username=username;
    this.password =password;
    this.firstName=firstName;
    this.lastName = lastName;



    this.getUsername = getUsername;
    this.setUsername = setUsername;
    this.getPassword = getPassword;
    this.setPassword = setPassword;
    this.getFirstName = getFirstName;
    this.setFirstName = setFirstName;
    this.getLastName = getLastName;
    this.setLastName = setLastName;


    function getUsername() {
        return this.username;
    }

    function setUsername(username) {
        this.username = username;
    }

    function getPassword() {
        return password;
    }

    function setPassword(password) {
        this.password = password;
    }

    function getFirstName() {
        return firstName;
    }

    function setFirstName(firstName) {
        this.firstName = firstName;
    }

    function getLastName() {
        return lastName;
    }

    function setLastName(lastName) {
        this.lastName = lastName;
    }


}