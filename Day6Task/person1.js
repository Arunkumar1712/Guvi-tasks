class person{
    constructor(Name,age,phoneno,email,location,occupation){
        this.Name=Name;
        this.age=age;
        this.phoneno=phoneno;
        this.email=email;
        this.location=location;
        this.occupation=occupation;
    }
}
const person1=new person("jack",22,"96772090965","jack@gmail.com","caribean","pirate");
const person2=new person("thor",122,"578474","thor@hammer.com","atlata","fighter")
console.log(person1);
console.log(person2);