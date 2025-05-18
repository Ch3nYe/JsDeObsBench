function a0_0x5ef1(YZOsoD, key) {
    var stringArray = a0_0x474b();
    a0_0x5ef1 = function (index, key) {
        index = index - 0x177;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5ef1(YZOsoD, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x3490ef = a0_0x5ef1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3490ef(0x187)) / 0x1 + -parseInt(_0x3490ef(0x17e)) / 0x2 + parseInt(_0x3490ef(0x17d)) / 0x3 * (parseInt(_0x3490ef(0x17c)) / 0x4) + -parseInt(_0x3490ef(0x18a)) / 0x5 + parseInt(_0x3490ef(0x17a)) / 0x6 + parseInt(_0x3490ef(0x17b)) / 0x7 * (-parseInt(_0x3490ef(0x179)) / 0x8) + parseInt(_0x3490ef(0x178)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x474b, 0x35d3e));
Main(function (input) {
    var _0x2ac15f = a0_0x5ef1;
    input = input['trim']()['split']('\x0a');
    input[_0x2ac15f(0x17f)]();
    input[_0x2ac15f(0x186)](function (line) {
        var _0x1b1244 = _0x2ac15f;
        var tmp = line[_0x1b1244(0x188)]('\x20');
        var c = +tmp[0x0];
        var a = +tmp[0x1];
        var n = +tmp[0x2];
        var ans = 0x0;
        var min;
        min = Math[_0x1b1244(0x181)](c, a, n);
        c -= min;
        a -= min;
        n -= min;
        ans += min;
        min = Math[_0x1b1244(0x181)](Math[_0x1b1244(0x182)](c / 0x2), a);
        c -= min * 0x2;
        a -= min;
        ans += min;
        ans += Math[_0x1b1244(0x182)](c / 0x3);
        console[_0x1b1244(0x177)](ans);
    });
});
function a0_0x474b() {
    var _0x175e26 = [
        'forEach',
        '429455BDpoJx',
        'split',
        'utf8',
        '688510QkcmNR',
        'log',
        '2554632hoWrKn',
        '2559992Qfaowy',
        '1274070JHItmq',
        '7RmaYBO',
        '12QkqIjG',
        '65955zFnUjm',
        '626848ZmKswf',
        'shift',
        'setEncoding',
        'min',
        'floor',
        'stdin',
        'end',
        'resume'
    ];
    a0_0x474b = function () {
        return _0x175e26;
    };
    return a0_0x474b();
}
function Main(main) {
    var _0x5055e8 = a0_0x5ef1;
    var input = '';
    process[_0x5055e8(0x183)][_0x5055e8(0x185)]();
    process[_0x5055e8(0x183)][_0x5055e8(0x180)](_0x5055e8(0x189));
    process[_0x5055e8(0x183)]['on']('data', function (chunk) {
        input += chunk;
    });
    process[_0x5055e8(0x183)]['on'](_0x5055e8(0x184), function () {
        main(input);
    });
}
;