function User(username, password, firstName, lastName) {

    this.username=username;
    this.password =password;
    this.firstName=firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.role = role;



    this.getUsername = getUsername;
    this.setUsername = setUsername;
    this.getPassword = getPassword;
    this.setPassword = setPassword;
    this.getFirstName = getFirstName;
    this.setFirstName = setFirstName;
    this.getLastName = getLastName;
    this.setLastName = setLastName;
    this.getPhone = getPhone;
    this.setPhone = setPhone;
    this.setEmail = setEmail;
    this.getEmail = getEmail;
    this.getDateOfBirth = getDateOfBirth;
    this.setDateOfBirth = setDateOfBirth;
    this.getRole = getRole;
    this.setRole = setRole;



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

   function getPhone() {
        return phone;
    }
    function setPhone(phone) {
        this.phone = phone;
    }

    function getEmail() {
        return email;
    }

    function setEmail(email) {
        this.email = email;
    }

    function getDateOfBirth() {
        return dateOfBirth;
    }

    function setDateOfBirth(dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }


    function getRole() {
        return role;
    }

   function setRole(role) {
        this.role = role;
    }


}