// Problem 1: Write a javascript function that accepts a string as a parametr and find the longest word within the string
function findLongestWord(str) {
    const arrayOfWords = str.split(" ");
    let longestWord = "";
// Using the for loop
    for(let i = 0 ; i < arrayOfWords.length ; i++) {
        if(arrayOfWords[i].length > longestWord.length) {
            longestWord = arrayOfWords[i];
        }
    }

    return longestWord;
}

 console.log(findLongestWord("find the longest word"));