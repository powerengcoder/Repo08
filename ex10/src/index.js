function convertStrToInt(str){
    return parseInt(str);
}

convertStrToInt(44);
convertStrToInt(27);
console.log(convertStrToInt("44"));
console.log(convertStrToInt("27"));
console.log(convertStrToInt("JeffBezos"));
module.exports = convertStrToInt;