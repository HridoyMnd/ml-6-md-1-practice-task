
//Write an arrow function that will do the following
//a) it will take a numbers array
//b) square the each array elements
//c)Calculate the sum of squared elements
//d) Return the average of the sum of the squared elements

const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const myFunction = (arr) => {
    let sum = 0;
    for(const number of arr){    
        sum += number ** 2;
    }
    const Average = sum / arr.length;
    return Average;
}
console.log(myFunction(numbers));