//Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear()
    }

    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '1995-05-17T03:24:00');
console.log(person1.getBirthYear());
console.log(person1.dob.getMonth());
console.log(person1.getFullName())

console.log("-------------------------------------------");

const person2 = new Person('James', 'Bond', '10/08/1970');
console.log(person2.dob.getMonth());
console.log(person2.getFullName());


const person4 = new Person('Sherlock', 'Holmes', '5/10/2000');
console.log(person4.dob.getFullYear());
console.log(person4.getFullName());

function Book(bookName, bookAuthor, bookPrice) {
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.bookPrice = 1000;
}

const book1 = new Book("Agnipankh", 'Dr. A.P.J. Abdul Kalam', "19900");
const book2 = new Book("fiction", "xyz", '188');
const book3 = new Book("horror", "harry", "2300");

console.log(book1, book2, book3);
