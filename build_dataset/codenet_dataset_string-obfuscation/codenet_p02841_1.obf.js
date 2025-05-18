var a0_0x55d7fb = a0_0x26de;
(function (stringArrayFunction, comparisonValue) {
    var _0x38cd96 = a0_0x26de;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x38cd96(0x166)) / 0x1 + -parseInt(_0x38cd96(0x160)) / 0x2 * (parseInt(_0x38cd96(0x164)) / 0x3) + parseInt(_0x38cd96(0x16e)) / 0x4 * (parseInt(_0x38cd96(0x16c)) / 0x5) + -parseInt(_0x38cd96(0x168)) / 0x6 + parseInt(_0x38cd96(0x16b)) / 0x7 + -parseInt(_0x38cd96(0x16d)) / 0x8 + parseInt(_0x38cd96(0x162)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5a0e, 0x9abd3));
function a0_0x5a0e() {
    var _0x272491 = [
        '9608319QdqQmO',
        'getMonth',
        '20400QigBHK',
        '2019/',
        '138739YWhoYU',
        'readFileSync',
        '406380RghXQe',
        'split',
        'utf8',
        '2677535AgmPPt',
        '545395GtZwtV',
        '1399160UppVjQ',
        '4aAwugC',
        '160HOywrz',
        'log'
    ];
    a0_0x5a0e = function () {
        return _0x272491;
    };
    return a0_0x5a0e();
}
function Main(input) {
    var _0x2b5ebf = a0_0x26de;
    var input = input[_0x2b5ebf(0x169)]('\x0a');
    var i1 = input[0x0][_0x2b5ebf(0x169)]('\x20');
    var i2 = input[0x1][_0x2b5ebf(0x169)]('\x20');
    var d1 = new Date(_0x2b5ebf(0x165) + i1[0x0] + '/' + i1[0x1]);
    var d2 = new Date(_0x2b5ebf(0x165) + i2[0x0] + '/' + i2[0x1]);
    if (d1[_0x2b5ebf(0x163)]() == d2[_0x2b5ebf(0x163)]()) {
        console[_0x2b5ebf(0x161)](0x0);
    } else {
        console['log'](0x1);
    }
}
function a0_0x26de(eNQalb, key) {
    var stringArray = a0_0x5a0e();
    a0_0x26de = function (index, key) {
        index = index - 0x160;
        var value = stringArray[index];
        return value;
    };
    return a0_0x26de(eNQalb, key);
}
Main(require('fs')[a0_0x55d7fb(0x167)]('/dev/stdin', a0_0x55d7fb(0x16a)));