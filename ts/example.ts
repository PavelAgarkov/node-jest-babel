type User = {
    name: string;
    age: number;
};

function isAdult(user: User, iShouldnTBeHere: string): boolean {
    return user.age >= 18;
}
