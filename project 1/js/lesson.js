// "Comment mi"

/*"And" 
   "ME!"*/

   var leftBorderWidth = 1;  // Объявление переменной 
   let second = 2;   // Объявление переменной (работает в внутри .....)
   const pi =3.14;   // Объявление переменной константы (не меняет своего значения)




 var number = 5;
 var string = "Hello";
 var sym = Symbol();
 var boolean = true;
 null;
 undefined;

 console.log(4/0);
 console.log('string' *9);


  var und;
  console.log(und);

  obj = {
  	name: "john",
  	age: 25,
  	isMarried: false
  }

  console.log(obj["name"]);
  //document.write(obj.name);

var arr = ['plum', 'orange', 'apple'];
console.log(arr[1]);

// alert("Hello");
// confirm("Are you hore?");
//var ansver = prompt("Вам eсть 18?", "18");

// console.log( typeof(arr));

// console.log('arr' + " - object");
// console.log(4 + " - object");

var incr = 10;
    decr = 10;

// incr++;
// decr--;

// console.log(incr++);
// console.log(decr--);

console.log(7%5);

console.log("10" === 10);

var isChecked = true;
var isClose = true;

console.log(isChecked || !isClose);

function learnJS(Land, collback) {
    console.log('Я учу' + lang);
    collback();
}

learnJS('javaScript ', done);

function done() {
  console.log('Я прошёл 3-й узок');

}