// const companies = [
//     { name: "company1", category: "retail", start: 1981, end: 2001 },
//     { name: "company2", category: "auto", start: 1988, end: 2004 },
//     { name: "company3", category: "technology", start: 1981, end: 2010 },
//     { name: "company4", category: "auto", start: 1989, end: 2014 },
//     { name: "company5", category: "retail", start: 1991, end: 2013 },
//     { name: "company6", category: "technology", start: 1993, end: 2009 },
//     { name: "company7", category: "auto", start: 1984, end: 2012 },
//     { name: "company8", category: "retail", start: 1990, end: 2014 }
    
// ];
// const age = [34, 65, 21,"dyjeh","key","poeter", 34, 35, 65, 65, 12, 12, 32, 22, 23, 34, 23, 34];
// // for (let i = 0; i <= companies.length; i++){
// //      console.log(companies[i].name);
// // // }
// // companies.forEach(function(company) {
// // console.log(company);
    
// //  });
//  const estart =age.filter(company => 2*company);
//  console.log(estart);
// const lastedtenyears = companies.filter(company => (company.end - company.start<= 20));
// // console.log(lastedtenyears);
// const key = companies.name.join("janam");
// // console.log(key);
// const mapping = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// // console.log(mapping);
// const mapping = age.map(company => Math.sqrt(company));
// // console.log(mapping);
// const sorted = companies.sort((a, b) => a.start < b.start ? 1 : -1);
// // console.log(sorted);
// const st = age.map(a=> 2*a);
// // console.log(st);
// // const rede = companies.reduce((a, b) => a + (b.end - b.start), 0);
// // console.log(rede);
// const key = companies.filter(company => company.name == "company7");
// // console.log(key);
// const key = age.forEach(company =>(company21));
// // console.log(key);
// // const key = age.indexOf("h");
// // console.log(key);
// // const key = companies.reduce((ages,ke) => ages + ke.start,0);
// // console.log(key);
// var x="monday",y;
// switch (x) {
//     case "sunday":
//         console.log("sunday");
//         break;
        
//     case "monday":
//         console.log("monday");
//         break;
    
//         case "tuesday":
//             console.log("tuesday");
//         break;
//     case "wednesday":
//         console.log("wednesday");
//         break;
    
//         case "thursday":
//             console.log("thursday");
//         break;
    
//         case "friday":
//             console.log("friday");
//         break;
    
//         case "saturday":
//             console.log("saturday");
// //             break;
// var x = document.getElementsByClassName("loginform");
// // console.log(document.all);
// var x = document.querySelector("h1");
// console.log(x);
// x.textContent = "Addmission Form";
// x.style.color = '#ff3243';

// var x = document.querySelector('input:nth-child(6)');
// x.value = "Hi";

// var y = document.querySelector('input[type="password"]');
// y.value = "Hi";

//     default:
//         console.log("Day is not found");
// //         break;
// // }
// // // console.log(navigator);
// // const jk = {
// //     name: "Shyam", id: 34, year: 2018, func :function(){
// //       return  `${this.name} aaj ${this.id} ki id ke sath ${this.year} tak rah payega`; }
// // };
// // console.log(Object.values(jk));
// function Jack(name,id,year) {
//     this.name = name;
//     this.year = year;
//     this.id = id;
    
// }
// Jack.prototype.fuck = function () {
//     return `${this.id}`;
// }
// Jack.prototype.time = function () {
//     const years = new Date().getFullYear()- this.year;
//     return `${this.name} is ${years} year old `;
// }
// var jack = new Jack("jack",23,2016);

// Jack.prototype.ct = function (kt) {
//     this.year = kt;
//     this.revised = "born bita";
// }
// jack.ct(2020);
// console.log(jack);
// function magzine(name, id, year, month) {
//     Jack.call(this, name, id, year);
//     this.month = month;
// }
// magzine.prototype = Object.create(Jack.prototype);
// var mag = new magzine("kammal", 32, 2000, "jan");
// // console.log(mag);
// var x = 12, y = 23;
// const ab =(a,b)=> 
// //      a+b;

// // console.log(ab(x,y));

// function obj(author, id, year, title) {
//      this.author = author;
//      this.id = id;
//      this.year = year;
//           this.title = title;
// }
// obj.prototype.fullyear = function () {
//      const dear = new Date().getFullYear() - this.year;
//      return dear;
     
// };
// obj.prototype.revise = function (a, b) {
//      this.year = a;
//      this.id = b;
//      this.tech = "education";
//      this.profession = "studying"
// };
// function book(author, id, year, title, month) {
//      obj.call(this, author, id,year, title);
//      this.month = month;
//      this.year = 2123;
// }
// book.prototype = Object.create(obj.prototype);

// var on = new book("ram", 32, 2017, "narayana",2);

// on.revise(2321, 32);
// // console.log(on);
// var obj1 = {
//      getAge: function () {
//           const dear = new Date().getFullYear() - this.year;
//           return dear;
//      },
//      getsummery: function (a, b) {
//           this.year = a;
//           this.id = b;
//           return `${this.year}    ${this.id}`;
//      }
//  }
// const jk = Object.create(obj1);
// jk.title = "shiva";
// jk.id = 32;
// jk.year = 2121;
// // console.log(jk.getsummery(2201,55));
// const jk = Object.create(obj1, {
//           title: { value: "janam" }, id: { value: 33 }, year: { value: 3212 }
//      });
// //      console.log(jk.title);
// // var kk = { title:"maharashtya", id:34, author:"lala" };
// // console.log(kk.title);
// // kk = Object.crea te(obj1);

// class time{
//      constructor(title, author, year) {
//           this.title = title;
//           this.author = author;
//           this.year = year;
//      }
//      getsummery() {
//           return `  ${this.title} is a author of ${this.author} in the ${this.year}`;
//      }
// }
// class subtime extends time{
//      constructor(title, author, year, month) {
//           super(title, author, year);
//           this.month = month;
//      }
// }
// const kk = new subtime('the cameramen', 'chandramukhi', 1290,'july');
// console.log(kk);