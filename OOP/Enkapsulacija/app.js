// ------------------------> Enkapsulacija <---------------------------

// Enkapsulaciju koristimo za zastitu podataka.
//Enkapsulacija se odnosi na proces sakrivanja unutrašnjeg stanja objekta od spoljašnjeg sveta,
//i omogućava nam da zaštitimo podatke i ponašanje objekta od nepoželjnih promena.

class Osoba{
    constructor(ime, godine){
        let _ime = ime
        let _godine = godine

        this.getIme = function(){
            return _ime
        }

        this.getGodine = function(){
            return _godine
        }

        this.setIme = function(ime){
            _ime = ime
        }

        this.setGodine = function(godine){
            _godine = godine
        }
    }
}

let osoba = new Osoba("Nebitno", 25)
console.log(osoba.getIme());
console.log(osoba.getGodine());

osoba.setIme("Neko")
osoba.setGodine(30)

console.log(osoba.getIme());
console.log(osoba.getGodine());

console.log("-----------------------------------");

class Automobil{
    constructor(motor, marka, kubikaza, konji){
        let _motor = motor
        let _marka = marka
        let _kubikaza = kubikaza
        let _konji = konji

        this.getMotor = function(){
            return _motor
        }
        this.getMarka = function(){
            return _marka
        }
        this.getKubikaza = function(){
            return _kubikaza
        }
        this.getKonji = function(){
            return _konji
        }

        this.setMotor = function(motor){
            _motor = motor
        }
        this.setMarka = function(marka){
            _marka = marka
        }
        this.setKubikaza = function(kubikaza){
            _kubikaza = kubikaza
        }
        this.setKonji = function(konji){
            _konji = konji
        }
    }
}

let automobil = new Automobil("1.9TDI", "Golf", "94kw", "131")
console.log(automobil.getMotor());
console.log(automobil.getMarka());
console.log(automobil.getKubikaza());
console.log(automobil.getKonji());

console.log("-----------------");

automobil.setMotor("2.0TDI")
automobil.setMarka("Passat")
automobil.setKubikaza("95kw")
automobil.setKonji("141")

console.log(automobil.getMotor());
console.log(automobil.getMarka());
console.log(automobil.getKubikaza());
console.log(automobil.getKonji());