// 1.How to compare two JSON have the same properties without order?
//  var obj1 = { name: "Person 1", age:5 };
//  var obj2 = { age:5, name: "Person 1" };
// Answer:
// var obj1 = { name: "Person 1", age:5 };
// var obj2 = { age:5, name: "Person 1" };
// console.log(_.isEqual(obj1,obj2)); 
// Output:
// task4.js:3  true


// 2.display all the country flags in console 
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    for(var i=0;i<data.length;i++){
        console.log(data[i].flag);
    }
// 3.Use the same rest countries and print all countries name, region, sub region and population
for(var j=0;j<data.length;j++){
console.log(`countryname:${data[j].name}  region:${data[j].region}  subregion:${data[j].subregion}  population:${data[j].population}` );
    }
}