function solve(a,b){
while(b!==0){
    let c = b;
    b = a%b;
    a=c;
}

console.log(a);

}
solve(15,5)