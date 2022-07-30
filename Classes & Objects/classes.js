class Book{
    constructor(title,author,year){
     this.title = title;
     this.author = author;
     this.year = year;
    }
    // Methods
     getSummary() {
         return `${this.title} was written by ${this.author} in ${this.year}`
     };
     getAge() {
        const years = new Date().getFullYear() - this.year
        return `${this.title} is ${years} years old`;
    }
    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }

    //static Methods - method can be used without instantiation

      static topBookStores(){
        return 'Barnes and Noble'
      }


}
    
  // instantiate object
  const book1 = new Book('Book one','John Doe','2013');
  book1.revise('2020');
  console.log(book1);

      //calling the ststic method
  console.log(Book.topBookStores());

  // SUBCLASS
  class Magazine extends Book{
    constructor(title,author,year,month){
    super(title,author,year);
    this.month = month;
    }

  }

  //instantiate Magazine

const Mag1 = new Magazine('Mag One','John Doe','2018','Jan');
console.log(Mag1);
console.log(Mag1.getSummary());