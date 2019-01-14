const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => Promise.resolve(`${hero} says : ${sentence}`);
const johnSay = say(john);
const aryaSay = say(arya);
const sensaSay = say(sensa);

let sansaSaidFirstTime=false;

const sensaSayForTheNorth = () => {
    sensaSay('For the North').then(function(response){
        console.log(response)
    });
    return new Promise( (resolve, reject) => {
        resolve(sansaSaidFirstTime);
        sansaSaidFirstTime = true;
    })
};

const johnAndAryaSay = (isSansaSaidFirstTime) => {

    aryaSay('The king in the North').then(function(response){
        console.log(response)
    });

    if(!isSansaSaidFirstTime){
        johnSay('Winter is coming').then(function(response){
            console.log(response);
        });
    }

};

const intervalId = setInterval(() => sensaSayForTheNorth().then(johnAndAryaSay).catch(err => console.error(err)), 1000);
setTimeout(() => clearInterval(intervalId), 11000);

//j'ai mis 11 sec au lieu de 10, car il y a une ligne de plus mais je ne comprends pas d'ou vient le problème!