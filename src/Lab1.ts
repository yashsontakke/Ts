//1. How do you reverse a string?
function revString(str:string):string{
    return str.split('').reverse().join('');
}

console.log(revString("sldnaslk")); // output klsandls
//2. How do you determine if a string is a palindrome
function checkPalindrome(str:string):boolean{
    let i=0;
    let j=str.length-1; 
    while(i<j){
        if(str.charAt(i)!=str.charAt(j)) return false;
        i++;
        j--;
    }
    return true ;
}

console.log(checkPalindrome("aba")); // true 
console.log(checkPalindrome("abc"));  // false 

//3 How do you calculate the number of numerical digits in a string?
function calNumDigitinString(str:string):number{
    let count =0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)>='0' && str.charAt(i)<='9')    count++;
    }
    return count ;

}

console.log(calNumDigitinString("nskajdn2398e23i73r")); // 8 

// 4. How do you find the count for the occurrence of a particular character in a string?

function freqOfCharacter(str:string , ch:string):number{
    let count =0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)===ch)count++;
    }
    return count ;
}
console.log(freqOfCharacter("cjneijcnejiedcjnewc" , 'c'));  // 4

//5. How do you find the non-matching characters in a string?

function nonMatchingCharacter(str:string , ch:string):number{
    let count =0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)!==ch)count++;
    }
    return count ;
}
console.log(nonMatchingCharacter("cjneijcnejiedcjnewc" , 'a'));   // 19 

// 6. How do you find out if the two given strings are anagrams
function checkAnagrams(str1:string , str2:string):boolean{

    let count:Record<any,any>={};

    for(let char of str1){
        count[char]=(count[char] || 0)+1;
    }

    for(let char of str2){
        if(!count[char])   return false ;
        count[char]--;
    }
    return true ;
}

console.log(checkAnagrams("abca", "bcaa"));   // true 


//7. How do you calculate the number of vowels and consonants in a string? 
function calVowelsAndConsonants(str1:string):number[]{

  let vowels = ['a','e','i','o','u'];
  
  let v = 0;
  for(let ch of str1){
    if(vowels.includes(ch)) v++;
  }

  let ans = [v,str1.length-v];
  return ans ;
}

console.log(calVowelsAndConsonants('ibnxiwbjasbckaeioasx'));

//8. How do you total all the matching integer elements in an array
function total(arr:any[] , match:number):number{
    let filterdArray = arr.filter(elem=>elem===match);
    return filterdArray.reduce((sum,elem)=>elem+sum,0);
}

console.log(total([2,2,3,2,3,'4','2','4',2,4,4,2,4],4));  //12 

//9. How do you reverse an array? 

function reverseArray(arr:any):any[]{
    return arr.reverse();
}

console.log(reverseArray([2,23,23312,123,12])); // output klsandls

//10. How do you find the maximum element in an array? 

function maxInArray(arr:number[]):number{
    let max = Number.MIN_SAFE_INTEGER;
    for(let num of arr){
        max = Math.max(num,max);
    }
    return max ;
}

console.log(maxInArray([23,123,123,2,24,234,24,23,423,4]));  // 423

//11. How do you sort an array of integers in ascending order?

function sortArray(arr:number[]):number[]{
    //return arr.sort(); // works only for string 
    return arr.sort((a,b)=>a-b);
}

console.log(sortArray([213,123,123,23,32]));

//12. How do you calculate the sum of two integers?
function sumOfInteger(num1:number, num2:number):number{
    return num1+num2;
}
console.log(sumOfInteger(123,23));

//13. How do you find the average of numbers in a list?

function average(arr:number[]):number{
    let count =0;
    for(let num of arr){
        count+=num;
    }
    return count/arr.length;

}
console.log(average([23,234,2423,423,4234]));   // 1467.4

//14. How do you check if an integer is even or odd?

function checkEvenOrOdd(num:number):string{
    return num%2==0?'even':'odd';
}

console.log(checkEvenOrOdd(2134));  // even 
console.log(checkEvenOrOdd(2133));  // odd

//15. How do you find the middle element of a linked list?

// function middleOfList():number{

// }
