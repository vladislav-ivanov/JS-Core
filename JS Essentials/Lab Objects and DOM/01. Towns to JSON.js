function towns(param) {
    let town = [];
    for (let i = 1; i < param.length; i++) {
        let tokens = param[i].split('|').filter(x => x !== '');
        let currentTown = tokens[0].trim(' ');
        let latitude = +(+tokens[1]);
        let longitute = +(+tokens[2]);

        town.push({
            Town: currentTown,
            Latitude: latitude,
            Longitude: longitute
        });
    }
console.log(JSON.stringify(town));

}