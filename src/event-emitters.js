const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => console.log(`${hero} says : ${sentence}`);
const johnSay = say(john);
const aryaSay = say(arya);
const sensaSay = say(sensa);

myEmitter.on('north', () => {
    sensaSay('For the North')
    myEmitter.emit('john');
    myEmitter.emit('arya');

});
myEmitter.on('arya', () => aryaSay('The king in the North'));
myEmitter.once('john', () => johnSay('Winter is coming'));

const intervalId = setInterval(() => myEmitter.emit('north'), 1000);
setTimeout(() => clearInterval(intervalId), 5000);