var a0_0x107ef6 = a0_0x5bb5;
(function (stringArrayFunction, comparisonValue) {
    var _0x231154 = a0_0x5bb5;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x231154(0xbf)) / 0x1 + parseInt(_0x231154(0xc8)) / 0x2 + parseInt(_0x231154(0xc6)) / 0x3 + -parseInt(_0x231154(0xbe)) / 0x4 * (parseInt(_0x231154(0xc2)) / 0x5) + -parseInt(_0x231154(0xcb)) / 0x6 + parseInt(_0x231154(0xca)) / 0x7 * (-parseInt(_0x231154(0xc7)) / 0x8) + -parseInt(_0x231154(0xc5)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5b2c, 0x231f2));
function a0_0x5b2c() {
    var _0x460caa = [
        '28528IvGkhd',
        '213269nRvGce',
        'split',
        '/dev/stdin',
        '155YbIMRW',
        'log',
        'readFileSync',
        '846675VsZUhg',
        '667551QPEcWZ',
        '1184bTwoKR',
        '519038feGPBk',
        'abs',
        '1771oTDMxi',
        '1193016ZPvZNr',
        'fill',
        'utf8'
    ];
    a0_0x5b2c = function () {
        return _0x460caa;
    };
    return a0_0x5b2c();
}
function Main(input) {
    var _0x1d773c = a0_0x5bb5;
    input = input['split']('\x0a');
    var n = parseInt(input[0x0]);
    a = new Array(n)[_0x1d773c(0xcc)](0x0);
    b = new Array(n)[_0x1d773c(0xcc)](0x0);
    tmpa = input[0x1]['split']('\x20');
    tmpb = input[0x2][_0x1d773c(0xc0)]('\x20');
    var suma = 0x0;
    var sumb = 0x0;
    var dif = 0x0;
    for (i = 0x0; i < n; i++) {
        a[i] = parseInt(tmpa[i]);
        suma += a[i];
        b[i] = parseInt(tmpb[i]);
        sumb += b[i];
        dif += Math[_0x1d773c(0xc9)](a[i] - b[i]);
    }
    var ans = 'No';
    if (suma <= sumb && dif <= (sumb - suma) * 0x3) {
        ans = 'Yes';
    }
    console[_0x1d773c(0xc3)]('%s', ans);
}
function a0_0x5bb5(VKOnqH, key) {
    var stringArray = a0_0x5b2c();
    a0_0x5bb5 = function (index, key) {
        index = index - 0xbe;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5bb5(VKOnqH, key);
}
Main(require('fs')[a0_0x107ef6(0xc4)](a0_0x107ef6(0xc1), a0_0x107ef6(0xcd)));