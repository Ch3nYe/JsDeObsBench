var a0_0x3ee306 = a0_0x16da;
(function (stringArrayFunction, comparisonValue) {
    var _0x113f29 = a0_0x16da;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x113f29(0x1de)) / 0x1 + parseInt(_0x113f29(0x1dd)) / 0x2 * (parseInt(_0x113f29(0x1e2)) / 0x3) + -parseInt(_0x113f29(0x1e0)) / 0x4 + parseInt(_0x113f29(0x1ea)) / 0x5 * (parseInt(_0x113f29(0x1df)) / 0x6) + parseInt(_0x113f29(0x1e7)) / 0x7 + parseInt(_0x113f29(0x1da)) / 0x8 + -parseInt(_0x113f29(0x1db)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3976, 0x6752d));
function prime(max) {
    var _0x185efd = a0_0x16da;
    var arr = [];
    for (var i = 0x0; i <= max; i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math[_0x185efd(0x1e1)](Math[_0x185efd(0x1e8)](max));
    for (var i = 0x2; i <= sqrt; i++) {
        if (arr[i] == ![])
            continue;
        for (var j = i + i; j <= max; j += i) {
            arr[j] = ![];
        }
    }
    var result = {};
    for (var i = 0x0; i <= max; i++) {
        if (arr[i] !== ![])
            result[arr[i]] = !![];
    }
    return result;
}
function a0_0x16da(QEbEYe, key) {
    var stringArray = a0_0x3976();
    a0_0x16da = function (index, key) {
        index = index - 0x1da;
        var value = stringArray[index];
        return value;
    };
    return a0_0x16da(QEbEYe, key);
}
var p = prime(0xf423f);
var input = require('fs')[a0_0x3ee306(0x1e5)](a0_0x3ee306(0x1dc), a0_0x3ee306(0x1e6));
function a0_0x3976() {
    var _0x2dd763 = [
        'shift',
        '464705kPhTEP',
        '3804920HVgvtT',
        '5662089sbuljC',
        '/dev/stdin',
        '12pvlgwl',
        '473999HiPIqq',
        '42KBPoLu',
        '2212784oSuttM',
        'floor',
        '334317eZuxJh',
        'trim',
        'map',
        'readFileSync',
        'utf8',
        '1992851TDedRA',
        'sqrt'
    ];
    a0_0x3976 = function () {
        return _0x2dd763;
    };
    return a0_0x3976();
}
var Arr = input[a0_0x3ee306(0x1e3)]()['split']('\x0a');
while (!![]) {
    var v = Arr[a0_0x3ee306(0x1e9)]();
    if (v == '0\x200\x200')
        break;
    var adn = v['split']('\x20')[a0_0x3ee306(0x1e4)](Number);
    var cnt = 0x0;
    var sum = adn[0x0] - adn[0x1];
    while (cnt != adn[0x2]) {
        sum += adn[0x1];
        if (p['hasOwnProperty'](sum))
            cnt++;
    }
    console['log'](sum);
}