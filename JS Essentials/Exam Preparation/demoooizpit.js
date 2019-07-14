function solve(fundamentals,advanced,application, form){

let total = 0;
if(fundamentals){
    total+= 170;
}
if(advanced){
    total += 180;
}
if(application){
    total += 190;
}
if(fundamentals === true && advanced === true){
    total -= 180 * 0.10;
}
if(fundamentals === true && advanced === true && application === true){
    total -= total * 0.06;
}
if(form === 'online'){
    total -= total * 0.06;
}
console.log(Math.round(total));

}
solve(true,true,false,"onsite")