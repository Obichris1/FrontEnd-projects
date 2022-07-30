// var guestList = ["Angela","Jack","Pat","Lara","James"]; // An array of strings
// // var name = prompt("what is your name?");   
// // // the .include() method returns a boolean which check if the argument is in the array.
// // if (guestList.includes(name)){
// //     alert("Welcome "+name);
// // }
// // else{
// //     alert("Sorry! maybe next time "+name);
// // }
//     //js Array methods

// // toString() - The JavaScript method toString() converts an array to a string of (comma separated) array values.
// // join() - The join() method also joins all array elements into a string.It behaves just like toString(), but in addition you can specify the separator.
// // pop() -The pop() method removes the last element from an array.
// // push() - The push() method adds a new element to an array (at the end).
// // isArray() - checks if a variable is an Array
// // unshift() - adds a anew element to the beginning of the array

// // guestList[5] = 40;
// // console.log(Array.isArray(guestList));
// // console.log(guestList.pop());

// console.log(guestList.splice());
// console.log(guestList);

      
// //Creating Arrays using constructors
//    const numbers = new Array(1,2,3,4,5)
// //JavaScript allows more than one data type within an array
//    const fruits = ["apple", "orange", 30, true]
        
//    //Adding values to an the back of an array(Alternative to push() method)

// fruits[3] = "mangoes"
// fruits.unshift("grapes");
// console.log(fruits);



//   //   FOR EACH LOOP
// //for each loops can also take in index and Arrays
// //which gives the index and the whole arrays respectively

// const cars = ['Ford','Chevy','Honda','Toyota'];
// cars.forEach(function(car){
//     console.log(car);
// })


 const Companies = [
    {name : "Company One", category : "Finance", start : "1981", end : "2003"},
    {name : "Company Two", category : "Retail", start : "1992", end : "2008"},
    {name : "Company Three", category : "Auto", start : "1999", end : "2007"},
    {name : "Company Four", category : "Retail", start : "1989", end : "2010"},
    {name : "Company Five", category : "Technology", start : "2009", end : "2014"},
    {name : "Company Six", category : "Finance", start : "1987", end : "2010"},
    {name : "Company Seven", category : "Auto", start : "1986", end : "1996"},
    {name : "Company Eight", category : "Technology", start : "2011", end : "2016"},
    {name : "Company Nine", category : "Retail", start : "1981", end : "1989"}
 ]
 
 const ages = [33,12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
         //WITHOUT USING FILTERS
 
//   let canDrink = [];
//   for(let i = 0; i < ages.length; i++){
//    if(ages[i] >= 21){
//       canDrink.push(ages[i]);
//    }
//   }
//   console.log(canDrink)

  //  USING FILTERS
//    const canDrink = ages.filter(function(age){
//     return age >=21;
//   });
            //OR USING THE ARROW FUNCTIONS
  //   const canDrink = ages.filter( age => age >= 21)
  // console.log(canDrink);




  // filter retail companies
  // const retailCompanies = Companies.filter(company => company.category === "Retail")
  //   console.log(retailCompanies);

  //   //filter 80s companies
  //   const eightiesCompanies = Companies.filter(company => company.start >= 1980 && company.start < 1990 )
  //   console.log(eightiesCompanies)
   

  //   //filter companies that lasted 10 years or more
  //   const lastTenYears = Companies.filter(company => (company.end - company.start >= 10) )
  //      console.log(lastTenYears);






       //  MAPS
//The Map object holds key-value pairs and remembers the
//original insertion order of the keys.

//Map objects are collections of key-value pairs. A key in the Map may only occur once;
//it is unique in the Map's collection.
//Objects vs. Maps
//Object is similar to Map—both let you set keys to values, retrieve those values, delete keys,
//and detect whether something is stored at a key. For this reason (and because there were no built-in alternatives),
//Object has been used as Map historically.
//However, there are important differences that make Map preferable in some cases:


// const users = [
// {id: 1, name:'john'},
// {id: 2, name:'sara'},
// {id: 3, name:'jay'},
// {id: 4, name:'karen'}

// ]

// const ids = users.map(function(user){
// return user.id

// })

// console.log(ids)



//TRAVERSY

//EXAMPLE 2

//create an array of company names

  // const companyNames = Companies.map(function(company){
  //   return company.name
  // })
  //    console.log(companyNames);


     //using maps tomap company name and dates    
  // const testMap = Companies.map(company => `${company.name} [${company.start}] - [${company.end}]`)
  // console.log(testMap);


// square root of the ages and then multiply it by two
  // const ageMap = ages
  // .map(age => Math.sqrt(age))
  // .map(age => age * 2)
  //  console.log(ageMap);






  //  //SORT
      //sort companies by start year
//    const sortedCompanies = Companies.sort(function(c1 , c2){
//     if(c1.start > c2.start)
//         return 1;
//     else 
//        return -1;
//    }
// )
//     console.log(sortedCompanies);


     // OR USING ARROW FUNCTION AND TENARY OPERATOR TO SORT COMPANY CATEGORY,
        //  const sortCompanies = Companies.sort((c1,c2) => c1.category > c2.category ? 1 : -1 )
        //  console.log(sortCompanies);

//SORT AGES
  // const sortedAges = ages.sort();   //sorts just from the first number
  // console.log(sortedAges);
   

  // const sortAges = ages.sort((a,b) => a-b); // sorts in ascending order
  // console.log(sortAges);
   
  // const sortAges = ages.sort((a,b) => b-a); // sorts in descending order
  // console.log(sortAges);

            //REDUCE
     //adding all the values in the array together
     //using for loop
  // let ageSum = 0;
  // for (let i = 0; i < ages.length; i++){
  //   ageSum = ageSum + ages[i]

  // }
  // console.log(ageSum);




                 
  //using the reduce method

  // const sumOfAge = ages.reduce(function(prev,curr){
  //   return prev + curr
  // },0)
  // console.log(sumOfAge)
     
  // //using arrow function

  // const age_sum = ages.reduce((prev,curr) => prev + curr,10);
  // console.log(age_sum);
  


  // Getting the total years
  // const totalYears = Companies.reduce((total, company) => total +(company.end - company.start),0)
  // console.log(totalYears);
 
   //COMBINE METHODS
    const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40 )
    .sort((a,b) => (a-b) )
    .reduce((prev,curr) => prev + curr ,0 )
    console.log(combined);


