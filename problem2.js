
//Write an arrow function that will do the following
//a) It will take an array where the array element will be the name of your friends
//b)Check if the length of each element is even push the elements with even length to a new array and return the result.
const myFriends = ["Hridoy", "Akash", "Ashu", "Shuvo", "Modon", "Saju", "Ronjit", "Ajay"];
const friends = (arr) => {
    const newArr = [];
    for(const even of arr){
        if(even.length % 2 == 0){
            newArr.push(even);
        }
    }
    return newArr;
}
console.log(friends(myFriends));
