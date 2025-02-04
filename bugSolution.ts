function greeter(person: string | string[]): string {
  if (Array.isArray(person)) {
    return "Hello, " + person.join(", ");
  } else {
    return "Hello, " + person;
  }
}

let user = ["Jane User", "John Smith"];
let user2 = "Jane User";

console.log(greeter(user));
console.log(greeter(user2));