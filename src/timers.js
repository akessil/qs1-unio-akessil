const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => console.log(`${hero} says : ${sentence}`);
const johnSay = say(john); // may be used this way setTimeout(johnSay, 1000, 'hello');
const aryaSay = say(arya);
const sensaSay = say(sensa);

//scenario1
const intervalId = setInterval(() => sensaSay('For the north'), 1000)
setTimeout(() => setImmediate(()=> clearInterval(intervalId)), 10000)

setTimeout(() => {
    johnSay('Hello Ladies Stark')
    setImmediate(()=> aryaSay('Thank you for needle'))
    }, 2000)
