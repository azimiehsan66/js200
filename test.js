/*
  console.log(this);
  console.log("ali")

  function fullname(n) {
      return n;

  }

  console.log(fullname("ali", "kalan"));



  developer = {
      name:"ali",
      famili:"kalan",
      fullname: function () {
          console.log(this);
          return this.name + this.famili;
          return `this is ${this.name} ${this.famili} !!!`;
      }
  };

  console.log(developer.fullname());


 function Develope(name,family) {
     this.name = name;
     this.family = family;
 }










 var d1 = new Develope("alireza","kalantari");
 var d2 = new Develope("kalantar","kalantari");

 console.log(d1.name);
 console.log(d1.family);


 console.log(d2.name);
 console.log(d2.family);





function  Developer(name,family) {

    this.name = name;
    this.family = family;

}

Developer.prototype.fn = function () {
    return (this.name + " " +this.family);

}


    var d1 = new Developer("ehsan","azimi");
    var d2 = new Developer("ali","kalan");




    console.log(d1.fn==d2.fn);
    console.log(d2.fn);






function password(l){
    this.l = l;

}

password.prototype.generator = function () {
  var p = "";

  for (let i=0;i<this.l;i++)
  {
      p =p+  String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1) + 97))
  }
    return p;
};


p = new password(8);
console.log(p.generator());








function mazspace(directions) {



for (let direction of directions){

    this[direction]=false;


}

}

directions = ["aa","bb","cc"];

mazspace(directions);





setInterval(function () {
    console.log("ali"); },500);


setTimeout(function () {
    console.log("ali");
},1000)








(function sayhi() {
    console.log("hi");
})();




*/



(function () {
    console.log("hi");
})();