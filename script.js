let jsonObj = {
    name : "Raaz",
    chanel: "Raaz Info",
    friend: "Prasad",
    food: "Biryani"
}

console.log(jsonObj);

let myJsonStr = JSON.stringify(jsonObj);
console.log(myJsonStr);


myJsonStr = myJsonStr.replace('Raaz', 'Abul');
console.log(myJsonStr);


newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj);