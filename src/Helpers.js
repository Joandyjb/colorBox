function choice(arr){
    var index =  Math.floor(Math.random() * arr.length); 
    return arr[index];
}

export { choice };