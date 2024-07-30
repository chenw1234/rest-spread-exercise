// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function (num) {
//         return num % 2 === 0
//     });
// }

//ES2015 Function that takes a variable number of arguments
const filterOutOdds = (...vals) => vals.filter(num => num % 2 === 0)

//findMin
const findMin = (...args) => Math.min(...args)

//mergeObjects
const mergeObjects = (arg1, arg2) => ({ ...arg1, ...arg2 })

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(vals => vals * 2)]

//slice and dice
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}
//  solution pasted, WIP

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}