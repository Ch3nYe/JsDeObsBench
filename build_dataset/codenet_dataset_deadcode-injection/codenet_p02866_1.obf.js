var a0_0x14af10 = a0_0x2690;
function a0_0x4d93() {
    var _0x364e16 = [
        'split',
        'length',
        'pow',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x4d93 = function () {
        return _0x364e16;
    };
    return a0_0x4d93();
}
function main(arg) {
    var _0x389836 = a0_0x2690;
    var arg2 = arg[_0x389836(0x0)]('\x0a')[0x1][_0x389836(0x0)](/\s/g);
    var kazoe = [];
    for (i = 0x0; i < arg[_0x389836(0x0)]('\x0a')[0x0]; i++) {
        if (!kazoe[arg2[i]]) {
            kazoe[arg2[i]] = 0x0;
        }
        kazoe[arg2[i]] += 0x1;
    }
    var ans = 0x1;
    for (j = 0x0; j < kazoe[_0x389836(0x1)]; j++) {
        if (j > 0x1) {
            ans = ans * Math[_0x389836(0x2)](kazoe[j - 0x1], kazoe[j]);
        }
        if (!kazoe[j]) {
            ans = 0x0;
            break;
        }
    }
    console[_0x389836(0x3)](ans % 0x3b800001);
}
function a0_0x2690(lyMluS, key) {
    var stringArray = a0_0x4d93();
    a0_0x2690 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2690(lyMluS, key);
}
main(require('fs')[a0_0x14af10(0x4)](a0_0x14af10(0x5), 'utf8'));