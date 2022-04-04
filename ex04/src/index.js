function function1(){

myLocalVariable = 5;

}

function function2(){

var result = "";
if(typeof myGlobalVariable != "undefined"){
    result += "myGlobalVariable: " + myGlobalVariable;
}
if(typeof myGlobalVariable != "undefined"){
    result += " myLocalVariable: " + myLocalVariable;
}
console.log(result);

}
var myGlobalVariable = 10;

function1();
function2();

module.expots = {
    function1,
    function2
};