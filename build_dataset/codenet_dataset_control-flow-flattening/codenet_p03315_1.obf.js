function main(input) {
    var PLuLpP = {
        'fcGOa': function (x, y) {
            return x < y;
        },
        'xMqJV': function (x, y) {
            return x == y;
        }
    };
    var input = input;
    var sum = 0x0;
    for (var i = 0x0; PLuLpP['fcGOa'](i, 0x4); i++) {
        if (PLuLpP['xMqJV'](input[i], '+')) {
            sum += 0x1;
        } else {
            sum -= 0x1;
        }
    }
    console['log'](sum);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));