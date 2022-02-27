function receivesAFunction(callBack) {
    callBack()
}
//receivesAFunction(eatTacos) 

function eatTacos() {
    return "Eat tacos"
}

function returnsANamedFunction() {
    return function playPool() {}
}

function returnsAnAnonymousFunction() {
    return function() {}
}
returnsAnAnonymousFunction();