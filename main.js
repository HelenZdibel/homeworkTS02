var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
var p1 = {
    name: "Bob",
    role: Role.Admin,
};
var p2 = {
    name: 'John',
    role: Role.User
};
function describePerson(person) {
    return person.name + ' is a ' + person.role;
}
console.log(describePerson(p1));
console.log(describePerson(p2));
