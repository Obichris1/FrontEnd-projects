//CONSTRUCTORS
 function Book(title,author, year){
     this.title = title;
     this.author = author;
     this.year = year;
     this.getSummary = function(){
         return `${this.title} was written by ${this.author} in ${this.year}`
     };
 }

     //Instansiate an object
 
const book1 = new Book('Book One','John Doe','2013',);
const book2 = new Book('book2, Jane Dan', '2017');
console.log(book1)
console.log(book1.getSummary());