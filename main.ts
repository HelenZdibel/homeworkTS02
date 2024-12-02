enum Role{
    Admin="ADMIN",
    User="USER",
    Guest="GUEST"
}

interface Person {
    name: string;
    role: Role;
}

const p1: Person = {
  name: "Bob",
  role: Role.Admin,
};
const p2:Person = {
    name: 'John',
    role: Role.User
}

function describePerson(person: Person): string {
    return person.name + ' is a ' + person.role
}

console.log(describePerson(p1)); 
console.log(describePerson(p2)); 
