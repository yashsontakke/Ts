// function reverseString(str:string):string{
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("kjasnbdkjsa"));

// // 2. Check if both numbers have the same last digit
// function checkNumbersLastDigit(num1:number , num2:number):boolean{
//     let l1:number = num1%10;
//     let l2:number = num2%10;
//     return l1===l2 ;
// }
// console.log(checkNumbersLastDigit(123,32135));


// //3. Replace names of multiple object keys with the values provided
// function replaceNames(obj:Record<string,any>, keyMapp:Record<string,any>):Record<string,any>{
//     Object.keys(obj).forEach(key=>{
//         console.log(key);
//         let value = obj.key;
//         delete obj.key;
//         obj.keyMapp.key=value;   
//     });
//     obj.name=keyMapp
//     return obj ;
// }
// function replaceKeys(obj: Record<string, any>, keyMap: Record<string, string>): Record<string, any> {
//   return Object.keys(obj).reduce((acc, key) => {
//       const newKey = keyMap[key] || key;
//       console.log(keyMap[key]);
//       acc[newKey] = obj[key];
//       return acc;
//   }, {} as Record<string, any>);
// }

// let obj1 : Record<string,any>={
//     first:"abc",
//     second:"kbc"
// }
// let newKey="third"
// obj1[newKey]="lgb"
// console.log(obj1[newKey]);

// console.log(obj1);

// let keyMapp={
//     first:"abey",
//     second:"tubey"
// }

// replaceKeys(obj1,keyMapp);

// //4. Get the first non-null/undefined argument
// function firstValid(...args:(null | undefined | any)[]):any{
//    return  args.find((x)=>x!==null && x!==undefined);
// }

// console.log(firstValid(null,undefined,"asda","213213"));

// // Compare two objects to determine if the first contains equivalent property values to the second

// function areEquals(o1:Record<any,number>, o2:Record<any,number>):boolean{
//     // return Object.keys(o2).every(key=> o2[key]===o1[key]);  
//    return  Object.keys(o2).every(key=> Object.keys(o1).includes(key)); 
// }

// let o1:Record<any,number> ={
//     az:4,
//     b:6
// }
// console.log(Object.keys(o1).forEach((k)=>console.log(k)));

// let o2 = {
//     az:4,
//     b:6
// }

// // console.log(areEquals(o1,o2));

