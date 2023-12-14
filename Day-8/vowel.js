function countvowel(items){
    let count=0;
    

    for(let i=0; i<items[0].length;i++){
        let letter = items[0][i].toLowerCase();
        if(letter=='a'||letter=='e'||letter=='i'||letter=='o'
        ||letter=='u'){
            count++;
        }
    }
    return count;
    
}
const str = ["hello World"];
console.log(countvowel(str));