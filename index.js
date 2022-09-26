function receivesAFunction (callback) {
    return callback ('spy');
}

function returnsANamedFunction (){
    return function ANamedFunction (){};
}

function returnsAnAnonymousFunction (){
  return function (AnAnonymousFunction){
        console.log ('to not deeply equal');
   };
}

