function palindrome(str){
    let letters = str[0].split('');
    let reverse = letters.reverse("");
    let back = reverse.join("");
    if (str[0].toLowerCase() == back.toLowerCase()){
        return true;
    }
    else{
        return false;
    }
}
const arr = ["wow"];
console.log(palindrome(arr));
