var a0_0x165844 = a0_0xee68;
function a0_0x899b() {
    var _0x3d46a2 = [
        '3SmCcSv',
        '1010737AZcrgP',
        '3741715VNzOnS',
        '1230484arwrXG',
        'log',
        'readFileSync',
        '1799skRjGd',
        'utf8',
        '376268qnijwr',
        '6324186OdPqpP',
        '25864BWhXuv',
        '13681125cgqOtd'
    ];
    a0_0x899b = function () {
        return _0x3d46a2;
    };
    return a0_0x899b();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x23d1db = a0_0xee68;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x23d1db(0xae)) / 0x1 + -parseInt(_0x23d1db(0xb5)) / 0x2 + parseInt(_0x23d1db(0xad)) / 0x3 * (parseInt(_0x23d1db(0xb0)) / 0x4) + parseInt(_0x23d1db(0xaf)) / 0x5 + parseInt(_0x23d1db(0xaa)) / 0x6 + parseInt(_0x23d1db(0xb3)) / 0x7 * (-parseInt(_0x23d1db(0xab)) / 0x8) + -parseInt(_0x23d1db(0xac)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x899b, 0x8dfd8));
function main(input) {
    var _0xec353c = a0_0xee68;
    var ans = 0x1;
    var inputNum = toInt(input);
    for (var i = 0x1; i <= input; i++) {
        ans = ans * i;
    }
    console[_0xec353c(0xb1)](ans);
}
function toInt(str) {
    return parseInt(str, 0xa);
}
function a0_0xee68(gKmgFJ, key) {
    var stringArray = a0_0x899b();
    a0_0xee68 = function (index, key) {
        index = index - 0xaa;
        var value = stringArray[index];
        return value;
    };
    return a0_0xee68(gKmgFJ, key);
}
main(require('fs')[a0_0x165844(0xb2)]('/dev/stdin', a0_0x165844(0xb4)));