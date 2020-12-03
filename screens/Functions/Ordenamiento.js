let Empleo1 = new Empleo(Aaa, Juan, pega, 1000, casa, 10, 100, 50, 100, 1);
let Empleo2 = new Empleo(Abb, Juan, pega, 1200, casa, 10, 100, 50, 100, 2);
let Empleo3 = new Empleo(Caa, Carlos, pega, 1400, casa, 10, 100, 50, 100, 3);
let Empleo4 = new Empleo(Jee, Marco, pega, 2000, casa, 160, 49, 19, 43, 4);
let Empleo5 = new Empleo(Nee, Marco, pega, 4500, casa, ahora, 4300, 1300, 40, 5);

var Empleos = [Empleo1, Empleo2, Empleo3,Empleo4, Empleo5];

console.log(Empleos);

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0]==="-"){
        sortOrder = -1;
        property = property=substr(1);
    }
    
    return function (a,b){
        if(sortOrder==-1){
            return b[property].localeCompare(a[property]);

        }
        else{
            return a[property].localeCompare(b[property]);
        }
    } 
}

Empleos.sort(dynamicSort("nombre"));


console.log(Empleos);