
function errorHandlingOpt(expression){
    optArray = ['+','-','*','%','/','^']
    count = 1;
    for (i = 0; i< optArray.length; i++){
        if (expression[0] != optArray[i]){
            count++
        }else{
            continue;
        }
    }
    if (count === optArray.length){
        return `you should enter Argument first`
    }
return 0;
}

function errorHandlingArg(result){
    if (result.length < 4){
        return `Error please enter two argument at least`
    }
    return 0;
}

module.exports = {errorHandlingArg, errorHandlingOpt}