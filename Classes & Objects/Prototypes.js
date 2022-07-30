//CONSTRUCTORS
 function Book(title,author, year){
     this.title = title;
     this.author = author;
     this.year = year;
   
 }

//protoype of Book

Book.prototype.getSummary = function(){
         return `${this.title} was written by ${this.author} in ${this.year}`
     };


  //getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year
    return `${this.title} is ${years} years old`;
}
// Revise / Change Year
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}

     //Instansiate an object
 
const book1 = new Book('Book One','John Doe','2013',);
const book2 = new Book('book2', 'Jane Dan', '2017');
console.log(book1)
console.log(book2.getAge());
book1.revise(2018);
console.log(book1);
