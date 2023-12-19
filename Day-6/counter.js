function countdown(n){
    let count = n;
    const id = setInterval(()=> {
        if(count === 0){
            clearInterval(id);
        }
    }
}