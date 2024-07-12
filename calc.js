#!/user/bin/node

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