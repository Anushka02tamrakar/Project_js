function IsAnagram(str1, str2)
{
    let n1 = str1.length;
    let n2 = str2.length;

    if(n1!=n2){
        return false
    }
    //sort both the strings
    str1.sort();
    str2.sort();

    for(let i=0; i<n1 ; i++){
        if(str1[i]==str2[i]){
            return true
        }
    return false

    }

}
let str1 = ['y', 'a', 's', 'h']
let str2 = ['h', 'a', 's']
console.log(IsAnagram(str1, str2));