// concepts of statics properties ;

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){     // do not want to access id everyone so use static keyword;
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())   // createId is not a fn ;

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();  
console.log(iphone.createId());   // not acessible so o/p ->  give iphone.createId is not a function