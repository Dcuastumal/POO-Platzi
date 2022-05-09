class Driver extends Account {
    constructor(name, document, email, password) {
        super(name, document)
        this.email = email;
        this.password = password;
    }
    printDataUser(){
        console.log(`Name: ${this.name}`);
        console.log(`Document: ${this.document}`);
        console.log(`Email: ${this.email}`);
        console.log(`Password: ${this.password}`);
    }
}