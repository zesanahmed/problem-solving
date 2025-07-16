type Person = {
  name: string;
  age: number;
};

const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

function updatePersonAge(
  people: Person[],
  nameToFind: string,
  newAge: number
): Person[] {
  const updatedPeople = people.map((person) =>
    person.name === nameToFind ? { ...person, age: newAge } : person
  );
  return updatedPeople;
}

const updatedArray = updatePersonAge(people, "Bob", 35);
console.log(updatedArray);
