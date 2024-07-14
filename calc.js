#!/usr/bin/node

const { clac, isValidOp} = require("./utility/utility.js");


if (process.argv.length < 3) {
    console.error(`Usage: node cal.js <num1> <operator1> <num2> [<operator2> <num3> ...]`);
    process.exit(1);
}

let args = process.argv.slice(2);

//check if the first argument is a number
if (isNaN(args[0])) {
    console.error(`Usage: node cal.js <num1> <operator1> <num2> [<operator2> <num3> ...]`);
    process.exit(1);
}

//parse arguments to numbers and operators
let nums = [];
let ops = [];

for (let i = 0;  i < args.length; i++) {
    if (i % 2 === 0) {
        const num = parseFloat(args[i]);
        if  (isNaN(num)) {
            console.error(`${args[i]} Is Not A Number`);
            process.exit(1);
       } else {
        nums.push(num);
       }
    } else {
        if (isValidOp(args[i])) {
            ops.push(args[i]);
        } else {
            console.error(`${args[i]} Is Invalid`);
            process.exit(1);
        }
        
    }
}


//checks if there is missed number ex: 1 + 2 - 
if (nums.length === ops.length + 1) {
    let result = nums[0];

    for (let i = 0; i < ops.length; i++) {
        result = clac(result, ops[i], nums[i + 1]);
    }
    console.log(`result is ${result}`);
} else {
    console.error('Invalid Format');
    console.error(`Usage: node cal.js <num1> <operator1> <num2> [<operator2> <num3> ...]`);
    process.exit(1);
} 








