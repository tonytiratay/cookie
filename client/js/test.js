class Parent {
  constructor(name) {
    this.name = name;
  }
  methode1() {
    return console.log("Je suis " + this.name);
  }
  methode2() {
    return console.log("Yipiiii");
  }
}


var pere = new Parent("Bob");
var mere = new Parent("martha");

pere.methode1(); // Renvoie "Je suis Bob"
mere.methode1();


class Child extends Parent {
  constructor(name){
    super(name);
    this.filsDe = "Bob";
  }
  methode3(){
    return console.log("Je suis le fils de " + this.filsDe);
  }
}
var thomas = new Child("Thomas");

thomas.methode1(); // Renvoie "Je suis Thomas"
thomas.methode2(); // Renvoie Yipiiii
thomas.methode3(); // Renvoie "Je suis le fils de Bob"
