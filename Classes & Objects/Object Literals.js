//note that once we add a method to a premitive,JS adds a wrapper to it on default making it an object

// const s1= "hello";
// console.log(typeof s1)


// // creating strings as objects
// const s2 = new String('hello')
// console.log(typeof s2);

//window object
// window.alert(1)
// console.log(window.navigator.appVersion);

// OBJECT LITERALS

const book1={
    title : 'Book one',
    author: 'John Doe',
    year:'2013',
    getSummary : function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

console.log(book1.getSummary());

const book2 = {
    title : 'Book Two',
    author: 'Jane Dan',
    year:'2017',
    getSummary : function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

console.log(book2.getSummary);

console.log(Object.values(book2)) // returns an array of the object values
console.log(Object.keys(book1))   // returns an array of the object keys


