class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
 
    // if we define getter then setter must be define otherwise code will not run 
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value    // _email is new variable here but underscore is used to set as private properties ;
    }

    get password(){           // in get and set name must be same ;
        return `${this._password}hitesh`     // get always return evenif empty
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")

console.log(hitesh.password)
console.log(hitesh.email);