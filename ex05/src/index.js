var sum = 0;

function addThree(){
    sum += 3;
    console.log("sum from addThree:",sum);
}

function addFive(){
    sum += 5;
    console.log("sum from addFive:",sum);
}

addThree();
addFive();

module.expots ={
    addThree,
    addFive
}