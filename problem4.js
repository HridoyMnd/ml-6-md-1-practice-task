
//Write an arrow function that will do the following
//a)it will take two array
//b)Combine the two array and assign them in a new array
//c)Find the maximum number from the new array and return the result;
const Arr1 = [2, 33, 55, 81, 9];
const Arr2 = [10, 25, 90, 42, 50];
const myFunction = (arr1, arr2) => {
    const newArr =[...arr1,...arr2];
    console.log(newArr);
}
console.log(myFunction(Arr1, Arr2));
