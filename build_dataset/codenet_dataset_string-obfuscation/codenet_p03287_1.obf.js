var a0_0x62003c = a0_0x3b9b;
function a0_0x3b9b(KOsEDO, key) {
    var stringArray = a0_0x1cee();
    a0_0x3b9b = function (index, key) {
        index = index - 0xa3;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3b9b(KOsEDO, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x2db50b = a0_0x3b9b;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2db50b(0xa8)) / 0x1 + parseInt(_0x2db50b(0xaf)) / 0x2 * (parseInt(_0x2db50b(0xae)) / 0x3) + parseInt(_0x2db50b(0xa5)) / 0x4 * (parseInt(_0x2db50b(0xa6)) / 0x5) + -parseInt(_0x2db50b(0xa3)) / 0x6 * (parseInt(_0x2db50b(0xaa)) / 0x7) + -parseInt(_0x2db50b(0xac)) / 0x8 + parseInt(_0x2db50b(0xad)) / 0x9 + -parseInt(_0x2db50b(0xab)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1cee, 0x79207));
function Main(s) {
    var _0x4cbb69 = a0_0x3b9b;
    s = s[_0x4cbb69(0xb2)]('\x0a');
    var n = s[0x0][_0x4cbb69(0xb2)]('\x20')[_0x4cbb69(0xb0)](a => +a);
    var m = n[0x1];
    n = n[0x0];
    var a = s[0x1][_0x4cbb69(0xb2)]('\x20')[_0x4cbb69(0xb0)](a => +a);
    var ans = 0x0;
    var b = {};
    var t = 0x0;
    for (var i = 0x0; i < n; i++) {
        t = (t + a[i]) % m;
        if (b[t])
            b[t]++;
        else
            b[t] = 0x1;
    }
    for (i in b) {
        i = +i;
        if (i === 0x0)
            ans += b[i] * (b[i] + 0x1) / 0x2;
        else if (b[i] > 0x1)
            ans += b[i] * (b[i] - 0x1) / 0x2;
    }
    console[_0x4cbb69(0xb1)](ans);
}
function a0_0x1cee() {
    var _0x12e66a = [
        '190JftjaA',
        'readFileSync',
        '178847fpLttJ',
        'utf8',
        '166803GIDHdj',
        '11316080LzvyzJ',
        '4568088ZwxaZp',
        '4843791tvERjr',
        '2061219loofnx',
        '2ZUdOOB',
        'map',
        'log',
        'split',
        '42DVOggh',
        '/dev/stdin',
        '101204JQHEeq'
    ];
    a0_0x1cee = function () {
        return _0x12e66a;
    };
    return a0_0x1cee();
}
Main(require('fs')[a0_0x62003c(0xa7)](a0_0x62003c(0xa4), a0_0x62003c(0xa9)));