type Book = {
  title: string;
  author: string;
  year: number;
};

const books: Book[] = [
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

function getBookTitles(books: Book[]): string[] {
  return books.map((book) => book.title);
}

const result = getBookTitles(books);
console.log(result);
