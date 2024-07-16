#!/user/bin/node

const {errorHandlingArg, errorHandlingOpt} = require('./error.js')
function calcWeb(result){
    if (errorHandlingArg(result) != 0){
            console.log(errorHandlingArg(result));
            return;
            }
    expression = result.slice(2).join(' ')
    if (errorHandlingOpt(expression) != 0){
            console.log(errorHandlingOpt(expression));
            return;
    }
    try{
        finalResult = eval(expression)
        if (finalResult === Infinity){
            console.log('the result is meanless')
        } else {
    console.log(finalResult)
        }
    } catch(Error){
        console.error(Error.message);
    }
}

calcWeb(process.argv)