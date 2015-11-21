class Person{
  constructor(name){
    this.name = name;
  }
  greet(){
    return `Hello My Name is ${this.name}.`;
  }
}

let person = new Person("Vivekanand");
console.log(person.greet());
