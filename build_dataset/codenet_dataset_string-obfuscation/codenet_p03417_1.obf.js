var a0_0x1d0eaf = a0_0x37c1;
(function (stringArrayFunction, comparisonValue) {
    var _0x52897d = a0_0x37c1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x52897d(0x168)) / 0x1 * (parseInt(_0x52897d(0x15d)) / 0x2) + -parseInt(_0x52897d(0x159)) / 0x3 * (parseInt(_0x52897d(0x15a)) / 0x4) + parseInt(_0x52897d(0x164)) / 0x5 + -parseInt(_0x52897d(0x166)) / 0x6 + parseInt(_0x52897d(0x167)) / 0x7 * (parseInt(_0x52897d(0x158)) / 0x8) + -parseInt(_0x52897d(0x160)) / 0x9 + parseInt(_0x52897d(0x15c)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x31bb, 0x3e9fa));
function a0_0x31bb() {
    var _0x1ba61e = [
        'readFileSync',
        '8MvdbGZ',
        '3aZtPwF',
        '376188rHEzEm',
        '/dev/stdin',
        '94420clEvIx',
        '280bmvqDg',
        'floor',
        'slice',
        '1444311ZIXuhq',
        'utf8',
        'log',
        'split',
        '2361555cpidMs',
        'map',
        '1737900BcakXu',
        '588063YZdtiG',
        '1678dvJClJ'
    ];
    a0_0x31bb = function () {
        return _0x1ba61e;
    };
    return a0_0x31bb();
}
function Main(input) {
    var _0x7e30bc = a0_0x37c1;
    input = input[_0x7e30bc(0x163)]('\x20')[_0x7e30bc(0x165)](a => parseInt(a));
    var N = input[0x0];
    var M = input[0x1];
    var ans = 0x0;
    if (N === 0x1 && M === 0x1)
        ans = 0x1;
    else if (N === 0x1 || M === 0x1)
        ans = N + M - 0x3;
    else
        ans = (N - 0x2) * (M - 0x2);
    if (ans > 0x1ff973cafa8000) {
        ans = Math['floor']((N - 0x2) / 0x2710) * (M - 0x2);
        tmp = (N - 0x2) % 0x2710 * (M - 0x2);
        ans += Math[_0x7e30bc(0x15e)](tmp / 0x2710);
        tmp = ('0000' + tmp % 0x2710)[_0x7e30bc(0x15f)](-0x4);
        ans += tmp;
    }
    console[_0x7e30bc(0x162)](ans);
}
function a0_0x37c1(GqyqEm, key) {
    var stringArray = a0_0x31bb();
    a0_0x37c1 = function (index, key) {
        index = index - 0x157;
        var value = stringArray[index];
        return value;
    };
    return a0_0x37c1(GqyqEm, key);
}
Main(require('fs')[a0_0x1d0eaf(0x157)](a0_0x1d0eaf(0x15b), a0_0x1d0eaf(0x161)));