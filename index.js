

function receivesAFunction(callback){
callback();
//call the callback function
}
//receivesAFunction({ Spy });

function returnsANamedFunction(){
return function named(){
  console.log("The girl is Jay.")
}
}

function returnsAnAnonymousFunction(){
return function(){
  console.log("The girl has no name.")
}
}
        // receives a function and calls it:

        // returnsANamedFunction()
      //   "before all" hook:

       //  returnsAnAnonymousFunction()
         //"before all" hook: