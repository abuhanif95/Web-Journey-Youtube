function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 890));

const user = {
    username : 'sft',
    price: 199,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);

handleObject({
    username : 'sht',
    price : 455,
})

const myArrayy = [200, 400, 100, 500];

function returnArray(getArray){
    return getArray[2];
}

// console.log(returnArray(myArrayy));
console.log(returnArray([200, 300, 400, 500]));