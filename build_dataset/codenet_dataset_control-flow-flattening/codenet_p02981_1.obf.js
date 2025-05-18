var main = standardInput => {
    var bKFTQk = {
        'FqjOE': function (x, y) {
            return x >= y;
        }
    };
    var lengthList = standardInput['split']('\x20');
    var n = Number['parseInt'](lengthList[0x0]);
    var a = Number['parseInt'](lengthList[0x1]);
    var b = Number['parseInt'](lengthList[0x2]);
    if (bKFTQk['FqjOE'](n * a, b)) {
        console['log'](b);
    } else {
        console['log'](n * a);
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8'));