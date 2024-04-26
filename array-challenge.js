const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
    Challenge: Display the numbers using the below format
    EVEN NUMBERS: 
    2
    4
    6
    8
    10
    ODD NUMBERS: 
    1
    3
    5
    7
    9
*/
const even = []
const odd = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        even.push(arr[i]);
    } else {
        odd.push(arr[i]);
    }
}

console.log("EVEN NUMBERS:");
even.forEach(function(arr) {
    console.log(arr);
});

console.log("ODD NUMBERS:");
odd.forEach(function(arr) {
    console.log(arr);
});