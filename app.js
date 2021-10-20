

console.log("Hello my name is Minju");

function sayHello(nameOfPerson,age){
    console.log("Hello my name is "+ nameOfPerson + "and I'm " + age);
}

sayHello("minju",54);
sayHello("nico",12);
sayHello("lynn",21);

function plus(a,b) {
    console.log(a+b)
}

plus(8,8);

function divide(a,b) {
    console.log(a/b)
}

divide(8,8);

const player = {
    name : "Minju",
    sayHello : function(otherPersonsName){
        console.log("hello!" + otherPersonsName + " nice to meet you");
    }
}

console.log(player.name);
player.sayHello(" lynn");

