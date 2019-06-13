function solve(num) {
    let digits = num.toString().split('').map(Number);
    let sum = 0;
    let areEqual = true;
    for (let i = 0; i < digits.length; i++) {
        let current = digits[i];
        sum += current;

        if (digits[i + 1] !== undefined &&
            areEqual === true &&
            current !== digits[i + 1]) {
            areEqual = false;
        }
    }
    console.log(`${areEqual}\n${sum}`);

}
solve(1234)