function localScope(){

    var myVariable = "test";
}

localScope();
if (typeof myVariable !="undefined"){
    console.log('outside localScope', myVariable)
}else{
    console.log('outside localScope UNDEFINED!!!')
}
module.exports = localScope;
  