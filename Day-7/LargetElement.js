//Input: [3, 7, 2, 9, 1]
//Output: 9
function largestelement(items){

    let largest = items[0];

    for(let i=1; i<items.length; i++){
        if (items[i]>largest){
            largest = items[i];
        }

    }
    return largest;
}
const arr = [3,7,2,9,12];
console.log(largestelement(arr));