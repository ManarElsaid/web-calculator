#!/usr/bin/node

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

module.exports = {isValidOp, clac};