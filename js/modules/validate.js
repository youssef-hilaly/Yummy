export class validate {
    validateName(name) {
        // only letters
        let regex = /^[a-zA-Z]+$/;
        return regex.test(name);
    }
    validatePhone(phone) {
        // only 10 or 11 numbers
        let regex = /^(01)[0125]\d{8}$/;
        return regex.test(phone);
    }
    validateEmail(email) {
        // The email couldn't start or finish with a dot
        // The email shouldn't contain spaces into the string
        // The email shouldn't contain special chars (<:, *,ecc)
        // The email could contain dots in the middle of mail address before the @
        // The email could contain a double doman ( '.de.org' or similar rarity)

        let regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        return regex.test(email);
    }
    validatePassword(password) {
        // at least one number, one letter
        // at least 8 characters
        let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(password);
    }
    validateRePassword(password, rePassword) {
        return password === rePassword;
    }
    validateAge(age) {
        // only 1 or 2 numbers
        let regex = /^\d{1,2}$/;
        return regex.test(age);
    }

    // validate all for enable/disable submit button
    validateAll(name, phone, email, age, password, rePassword) {
        return this.validateName(name) && this.validatePhone(phone) && this.validateEmail(email) && this.validateAge(age) && this.validatePassword(password) && this.validateRePassword(password, rePassword);
    }
}