class  Employee{
constructor(name,age,salary) {
    this._name=name;
    this._age=age;
    this._salary=salary
}
set name (name) {
this._name=name.toLowerCase();

}
get name() {
        return `my nickname : ${this._name}123`
    }
set age(changeAge){
    this._age=changeAge
}
get age(){
    return this._age
}

set salary (changeSalary){
    this._salary=changeSalary
}
get salary(){
    return this._salary
}

}


class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this.lang = lang;
    }

    set salary(newSalary) {
        this._salary = newSalary
    }

    get salary (){
        return this._salary *3
    }
}

const worker1=new Employee("gogi gogidze",22, 100);
console.log(worker1.name)


const worker2 = new Programmer("li",30,1000,"english");
console.log(worker2.salary)
console.log(worker2.lang)


const worker3= new Employee("ali",33,200);
console.log(worker3.name)