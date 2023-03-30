// Definisanje klase
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     // Definisanje metoda
//     sayHello() {
//       console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//     }
//   }
  
//   // Kreiranje novog objekta na osnovu klase
//   const person1 = new Person('John', 30);
  
//   // Pozivanje metoda objekta
//   person1.sayHello(); // Hello, my name is John and I'm 30 years old.

// -----------------------------------------------------------------------------

// class voce {
//     constructor(name, weight){
//         this.name = name
//         this.weight = weight
//     }
//     sayHello(){
//         console.log(`Zdravo, imamo ${this.name}. Cena je ${this.weight} din.`);
//     }   
// }
// const vrsta = new voce ("jabuke", 130)

// vrsta.sayHello()

// -------------------------------------------------------------------------------

// class vozilo {
//     constructor(marka, godina, motor){
//         this.marka = marka
//         this.godina = godina
//         this.motor = motor
//     }
//     da_li_je_motor_upaljen(){
//         if(this.motor === true){
//             console.log("Motor je upaljen");
//         }else{
//             console.log("Motor je ugasen");
//         }
//     }
// }

// const auto = new vozilo("BMW", 2005, true)

// auto.da_li_je_motor_upaljen()

// ------------------------------------------------------------------------------

// class politicar{
//     constructor(name, years, vlast){
//         this.name = name
//         this.years = years
//         this.vlast = vlast
//     }
//     da_li_je_na_vlasti(){
//         if(this.vlast === true){
//             console.log(`${this.name}, da na vlasti je :(`);
//         }else{
//             console.log("nije na vlasti :)");
//         }
//     }
// }
 
// const poliTicatri = new politicar("Vucic", 53, true)

// poliTicatri.da_li_je_na_vlasti()

class Species{
    constructor(name, kg){
        this.name = name
        this.kg = kg
    }
    wakeUp(){
        return `${this.name} wake up in the morning.`;
    }
    eat(){
        return `${this.name} they eat leaves, roots, tree bark, grass and fruit.`;
    }
    sleep(){
        return `${this.name} they sleep at night.`;
    }
    braking(){
        return`${this.name} every day.`
    }
}

class Elephant extends Species{
    constructor(name, kg){
        super(name, kg)
    }

    dailyRoutine(){
        return`${super.wakeUp()} then ${super.eat()} and then ${super.sleep()}.`
    }
}

const display = (content) => {
    console.log(content);
}
const elephant = new Elephant ("African", "1T")
display(elephant.dailyRoutine())

// --------------------------------------

class Dog extends Species{
    constructor(name, kg){
        super(name, kg)
    }
    
    routin(){
        return`${super.braking()} kjqwlijsbkdalihskduf`
    }
}

const dog = new Dog ("Vucijak", "50kg")
display(dog.routin())