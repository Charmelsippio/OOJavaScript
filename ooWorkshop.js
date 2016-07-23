// Problem 1: Cheat Sheet

//Creating a object literal

  //Within an object literal, variables become properties, and they tell us about the object, i.e. the things that make up the var - name, rooms, pool, etc. 

var hotel = {  //this is an object
  name: "W",//this is a property. "name" is a key and "W" is the value.
  rooms: 50,
  booked: 15,
  pool: true,
  roomType: ['twin', 'queen', 'king'],

  //Functions within an object become methods. Methods represent a task that is associated with object.

  checkAvailability: function() { //this is a method
    return this.rooms - this.booked
  }
  
};

hotel.checkAvailability() 
  
 
//Constructor function w/ instance objects

function Boutique(name, rooms, booked, pool, roomType) { //name, rooms, booked, etc are the make up the constructor function. 
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.pool = pool;
  this.roomType = roomType;
}

var hotel1 = new Boutique("Verge", 30, 22, true, "King" ); //This is an instance of the the Boutique Object

var hotel2 = new Boutique("Sudo", 100, 88, false, "Twin");


//Accessing Object Attributes and Methods

function Boutique(name, rooms, booked, pool, roomType) { //name, rooms, booked, etc are the make up the constructor function. 
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.pool = pool;
  this.roomType = roomType;
}

Boutique.prototype.roomsOpen = function() { //this is a method to access the info within the defined object Boutique
  return this.rooms - this.booked
}

var hotel1 = new Boutique("Verge", 30, 22, true, "King" ); //This is an instance of the the Boutique Object

var hotel2 = new Boutique("Sudo", 100, 88, false, "Twin");

hotel2.name //accessing an attribute (this returns Sudo)

hotel2.roomsOpen(); //accessing a method (this returns the number of remaining rooms ==> 12)


//---------------------------------------------------------------


//Problem 2: Write a Method that lists the properties of a JS Object


//For loop

var pieces = ["property", "constructor function", "method", "object"]

for (i = 0; i <= pieces.length; i++) {
  console.log(pieces[i])
}



//--------------------------------------------------------------


//Problem 3: Multiplier

function Multiplier() {
  this.value = 1;
}

Multiplier.prototype.multiply = function(number){
  this.value = this.value * number
  return this.value
}

Multiplier.prototype.getCurrentValue = function(){
  return this.value
}
var times = new Multiplier();

console.log(times.multiply(15));

console.log(times.getCurrentValue());
}





//--------------------------------------------------------------


//Problem 4: Photo Album

function Photos(filename, location){
  this.filename = filename,
  this.location = location;
}

function Album(){
  this.photo = [];
}

Album.prototype.addPhotos = function(photo){
  this.photo.push(photo);
};

Album.prototype.getPhotos = function(index){
  this.photo(index);
};

Album.prototype.listPhotos = function(){
  for (i = 0; i < this.photo.length; i++){
    console.log(this.photo[i].filename + "//" + this.photo[i].location);
  }
};

album = new Album();
album.addPhotos(new Photos("pic1", "France"));
album.addPhotos(new Photos("pic2", "Spain"));

album.listPhotos([0]);




//--------------------------------------------------------------


//Problem 5: Inhertitence


function Person(name) {
  this.name = name;
}

function Teacher(name, hasDegree, salary) {
  this.hasDegree = hasDegree,
  this.salary = salary,
  Person.call(this, name);
}

Teacher.prototype = Object.create(Person.prototype) //Creating a teacher prototype that is inheriting from the person class

function Student(name, gradeLevel) {
  this.gradeLevel = gradeLevel,
  Person.call(this, name);
}

Student.prototype = Object.create(Person.prototype) //Creating a student prototype that is inheriting from the person class


function School(schoolName, location) {
  this.schoolName = schoolName,
  this.location = location,
  this.schoolMakeup = [];
}





School.prototype.addPerson = function(person){
  this.schoolMakeup.push(person)
}

School.prototype.getPerson = function(index){
  this.schoolMakeup.push(index)
}
 
School.prototype.listPerson = function(){
  for(index = 0; index < this.schoolMakeup.length; index++){
    console.log(this.schoolMakeup[index]); //Pretty sure this.location & this.schoolName have to be added here to get it to show up in the console log, but when added, this is the result ==> New YorkP.S. 32[object Object] ==> pretty sure the '[object Object]' is pointing to the prototypes of teacher/student. Not sure how to get the school info to be inheritied. 
  }
}



var teacher1 = new Teacher("Amy", true, "50,000")

var teacher2 = new Teacher("Matt", true, "48,000")

var student1 = new Student("Timmy", "3")
var student2 = new Student("Julia", "8")


var newSchool = new School("P.S. 32", "New York");

newSchool.addPerson(teacher1);
newSchool.addPerson(teacher2);
newSchool.addPerson(student1);
newSchool.addPerson(student2);


newSchool.listPerson();

newSchool;






















