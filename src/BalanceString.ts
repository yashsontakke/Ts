// assuming balance parenthesis 
function checkStringBalance(str:string):boolean{
    let stack=[];
    for(let ch of str.split('')){
        if(ch==='('){
            stack.push(ch);
        }else if(ch==')'){
            if(stack.length===0){
                return false;
            }
            stack.pop();
        }
    }
    return stack.length===0;    
}
console.log(checkStringBalance("(())"))