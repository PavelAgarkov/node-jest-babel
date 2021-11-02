type User = {
    name: string;
    age: number;
};

let user = {name: 'pavel', age: 27};

function isAdult(user: User, iShouldnTBeHere: string): boolean {
    return user.age >= 18;
}

console.log(isAdult(user, 'one'));
