function solve(fruit, grams, price){
    let kilos = grams/1000;
    let total = kilos * price;
    console.log(`I need $${total.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`);
    
}
solve('orange',2500,1.80)