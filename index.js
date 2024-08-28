console.log('Hello From the NodeJs World. \nRun node to run this file.')

var date = new Date()

console.log(`Today's date: ${date.toUTCString()}`)


var set_value = [1,2,3]
console.log(typeof set_value)

set_value.forEach(element => {
     setTimeout(() => {
        console.log(element)
     }, 3000);
});


let new_value = set_value.map(value =>{
    return value*2
})

console.log(new_value)

let object = {
    name: 'james'
}
console.log(object.name)
//or 
console.log(object["name"])

class Player{


    constructor(name, jerseyNum, team, position){
        this.name = name
        this.jerseyNum = jerseyNum
        this.team = team
        this.position = position
    }

    
    toString(){
        return `Name: ${this.name}\nJersey N.: ${this.jerseyNum}\nTeam: ${this.team}\nPosition: ${this.position}`
    }
}



let Kobe = new Player('Kobe Bryant', 24, 'Lakers', 'SG')
console.log()
console.log(Kobe.toString()+'\n')