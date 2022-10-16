function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

// Instantiate object
const person1 = new Person('Kumar', 'Doe', '4-3-1980');
console.log(person1);

const person2 = new Person("James", "Bond", "13-07-1997")
console.log(person2)

const person3 = new Person("Sherlock", "Holmes", "14-07-1980")
console.log(person3);

function Book(bookName, bookAuthor, bookPrice) {
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.bookPrice = 1000;
}

const book1 = new Book("Agnipankh", 'Dr. A.P.J. Abdul Kalam', "19900");
const book2 = new Book("fiction", "xyz", '188');
const book3 = new Book("horror", "harry", "2300");

console.log(book1, book2, book3);
