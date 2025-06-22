
// old syntax  without using classes 

// define properties of get and set;  function based ;
function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {     // defineProperty(this, 'properties' , object) ;
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);   // CHAI@CHAI.COM 