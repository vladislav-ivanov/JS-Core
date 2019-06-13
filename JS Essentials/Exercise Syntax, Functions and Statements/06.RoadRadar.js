function radar(arr) {
    let speed = Number(arr[0]);
    let area = arr[1];
    function zone(area) {
        if (area == 'motorway') { return 130; }
        else if (area == 'interstate') { return 90; }
        else if (area == 'city') { return 50; }
        else if (area == 'residential') { return 20; }
    }
    let overSpeed = zone(area) - speed;
    if (overSpeed < 0) {
        if (overSpeed >= -20) {
            console.log('speeding')
        }
        else if (overSpeed < -20 && overSpeed >= -40) {
            console.log('excessive speeding ');
        }
        else {
            console.log('reckless driving');
        }
    }
}
radar([120, 'interstate'])