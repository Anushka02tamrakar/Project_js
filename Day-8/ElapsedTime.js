function calculatesum(n){
    let sum = 0;
    for(let i=1; i<=n;i++){
        sum +=i;
    }
    return sum;
}
function calculateTime(n){
    const startTime = new Date();
    calculatesum(n);
    const EndTime = new Date();
    const ElapsedTime = (EndTime-startTime)/1000;

    return ElapsedTime;
}

console.log(calculateTime(100));
console.log(calculateTime(10000));
console.log(calculateTime(100000000));