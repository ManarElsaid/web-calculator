#!/usr/bin/node

function isNoArgs(args) {
    if (args.length < 3 && !help(args)) {
        console.error(`Arguments Is Missed`);
        process.exit(1);
    }
};


//view help message
function help(args) {
    if (args.length === 1 && args[0] === 'help') {
        console.log(`Usage: node cal.js <num1> <operator1> <num2> [<operator2> <num3> ...]`);
        process.exit(0);
    }
}

//checks the validaty of the operators
const ops = ['+', '-', '*', '/', '^', '%'];

function isValidOp(op) {
    return ops.includes(op);
};

//calculate two numbers
function clac(num1, op, num2) {
    switch(op) {
        case '+':
            return num1 + num2;

        case '-':
            return num1 - num2;

        case '*':
            return num1 * num2;

        case '/' :
            if (num2 === 0) {
                console.error('Deviding By 0 Is Not Allowed');
                process.exit(1);
            } else {
                return num1 / num2;
            }

        case '^' :
            return num1 ** num2;

        case '%' :
            return num1 % num2;
            }
}

module.exports = {isValidOp, clac, isNoArgs, help};