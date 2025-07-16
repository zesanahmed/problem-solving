type Person = {
  name: string;
  age: number;
  gender: "male" | "female";
};

const people: Person[] = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 22, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
];

function getMaleNames(people: Person[]): string[] {
  return people
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
}

const result = getMaleNames(people);
console.log(result);
