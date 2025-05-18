function a0_0x3289(eWSBbA, key) {
    var stringArray = a0_0x2856();
    a0_0x3289 = function (index, key) {
        index = index - 0x1e7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3289(eWSBbA, key);
}
var a0_0x5447b2 = a0_0x3289;
function a0_0x2856() {
    var _0x5a7b1a = [
        '751940cuLnqK',
        '1120481ADYiWH',
        '45kYmuQt',
        '2553352ITbofE',
        'readFileSync',
        'log',
        '339794agoQMs',
        '2aTeTfa',
        '540hZqDhY',
        '11RubEvI',
        '3072048zjSOqK',
        '422404vDGViy',
        'UTF-8',
        '227521ySuJJh',
        '78zBawgq',
        'parseInt',
        'split',
        '18sNdEgT'
    ];
    a0_0x2856 = function () {
        return _0x5a7b1a;
    };
    return a0_0x2856();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x2e34b1 = a0_0x3289;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2e34b1(0x1f6)) / 0x1 * (parseInt(_0x2e34b1(0x1ea)) / 0x2) + -parseInt(_0x2e34b1(0x1ed)) / 0x3 + -parseInt(_0x2e34b1(0x1ee)) / 0x4 * (parseInt(_0x2e34b1(0x1f7)) / 0x5) + -parseInt(_0x2e34b1(0x1f1)) / 0x6 * (parseInt(_0x2e34b1(0x1f0)) / 0x7) + -parseInt(_0x2e34b1(0x1f8)) / 0x8 * (-parseInt(_0x2e34b1(0x1f4)) / 0x9) + -parseInt(_0x2e34b1(0x1f5)) / 0xa * (-parseInt(_0x2e34b1(0x1ec)) / 0xb) + -parseInt(_0x2e34b1(0x1eb)) / 0xc * (-parseInt(_0x2e34b1(0x1e9)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2856, 0x95b8b));
var main = standardInput => {
    var _0x3d6210 = a0_0x3289;
    var lengthList = standardInput[_0x3d6210(0x1f3)]('\x20');
    var n = Number['parseInt'](lengthList[0x0]);
    var a = Number[_0x3d6210(0x1f2)](lengthList[0x1]);
    var b = Number[_0x3d6210(0x1f2)](lengthList[0x2]);
    if (n * a >= b) {
        console[_0x3d6210(0x1e8)](b);
    } else {
        console[_0x3d6210(0x1e8)](n * a);
    }
};
main(require('fs')[a0_0x5447b2(0x1e7)]('/dev/stdin', a0_0x5447b2(0x1ef)));