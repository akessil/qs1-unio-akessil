const notSoHeavyDo = times => {
    let count = 0;
    for (let i = 0; i < times; i++) {
        if (
            Math.round(
                Math.log(Math.sqrt(Math.abs(Math.round(Math.random() * 1e10))))
            ) === 1
        )
            count++;
    }
    return count;
};

let total = 1e8;
let cuts = 100;
let counts = 0;
let stack = [];

const callback = (value) => console.log(value);

const executeHeavyJobStepByStep = () => {
    //get and delete first element (step to execute)
    let step = stack.shift();

    if (step == null || !step) {
        callback(counts);
        return;
    }

    setImmediate(() => {
        counts += step();
        executeHeavyJobStepByStep();
    })
};


for (let i = 0; i < cuts; i++) {
    stack.push(() => notSoHeavyDo(total / cuts));
}

const interval = setInterval(() => console.log('I am not blocked'), 1000);
setTimeout(() => {clearInterval(interval)}, 10000);

executeHeavyJobStepByStep();