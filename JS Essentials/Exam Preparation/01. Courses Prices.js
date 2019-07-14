function solve(fundamentals,advanced,apps,form){
const courses = {
    'JS fundamentals': 170,
    'JS advanced': 180,
    'JS apps': 190
};
let total = 0;

if(fundamentals){
    total += courses['JS fundamentals'];
}
if(advanced){
    total += courses['JS advanced'];
}
if(apps){
    total += courses['JS apps'];
}

if(fundamentals && advanced){
    total -= courses['JS advanced'] * 0.1;
}
if(fundamentals && advanced && apps){
    total -= total * 0.06;
}
if(form === 'online'){
    total -= total * 0.06;
}
console.log(Math.round(total));

}
solve([true,false,false,"onsite"]);