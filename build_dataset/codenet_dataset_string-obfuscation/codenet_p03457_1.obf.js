var a0_0x29cbcb = a0_0x3ee1;
(function (stringArrayFunction, comparisonValue) {
    var _0x4b8cd2 = a0_0x3ee1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4b8cd2(0x1ef)) / 0x1 * (parseInt(_0x4b8cd2(0x1f3)) / 0x2) + parseInt(_0x4b8cd2(0x1f0)) / 0x3 + parseInt(_0x4b8cd2(0x1ed)) / 0x4 * (-parseInt(_0x4b8cd2(0x1f2)) / 0x5) + parseInt(_0x4b8cd2(0x1eb)) / 0x6 * (parseInt(_0x4b8cd2(0x1f1)) / 0x7) + parseInt(_0x4b8cd2(0x1f8)) / 0x8 * (-parseInt(_0x4b8cd2(0x1f4)) / 0x9) + -parseInt(_0x4b8cd2(0x1fa)) / 0xa * (parseInt(_0x4b8cd2(0x1f7)) / 0xb) + parseInt(_0x4b8cd2(0x1fb)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2624, 0x674e4));
function Main(input) {
    var _0x16449f = a0_0x3ee1;
    var args = input['split']('\x0a');
    var N = parseInt(args, 0xa);
    var history = args[_0x16449f(0x1ea)](0x1, N + 0x1);
    var answer;
    var flg = 0x1;
    var plan = [];
    plan[0x0] = [
        0x0,
        0x0,
        0x0
    ];
    for (var i = 0x0; i < N; i++) {
        plan[i + 0x1] = parser(history[i]);
    }
    for (var i = 0x1; i < plan[_0x16449f(0x1e9)]; i++) {
        var rec1 = plan[i - 0x1];
        var rec2 = plan[i];
        var dt = rec2[0x0] - rec1[0x0];
        var dist = Math[_0x16449f(0x1e7)](rec2[0x1] + rec2[0x2] - rec1[0x1] - rec1[0x2]);
        if (dt >= dist && dt % 0x2 === dist % 0x2) {
        } else {
            flg = 0x0;
        }
    }
    answer = flg ? _0x16449f(0x1f5) : 'No';
    console[_0x16449f(0x1e8)](answer);
}
function parser(record) {
    var _0x177c49 = a0_0x3ee1;
    var args = record[_0x177c49(0x1ee)]('\x20');
    var return_val = [];
    return_val[_0x177c49(0x1f9)](parseInt(args[0x0], 0xa));
    return_val[_0x177c49(0x1f9)](parseInt(args[0x1], 0xa));
    return_val[_0x177c49(0x1f9)](parseInt(args[0x2], 0xa));
    return return_val;
}
Main(require('fs')[a0_0x29cbcb(0x1ec)](a0_0x29cbcb(0x1fc), a0_0x29cbcb(0x1f6)));
function a0_0x3ee1(iwIziP, key) {
    var stringArray = a0_0x2624();
    a0_0x3ee1 = function (index, key) {
        index = index - 0x1e7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3ee1(iwIziP, key);
}
function a0_0x2624() {
    var _0x377b0d = [
        'utf8',
        '44owvdVq',
        '2248IzwaTc',
        'push',
        '1491490WDhswU',
        '16290624DplrNB',
        '/dev/stdin',
        'abs',
        'log',
        'length',
        'slice',
        '56082JCweFA',
        'readFileSync',
        '188myUwMf',
        'split',
        '158RHLkEp',
        '1913862FyEfRo',
        '203kLvXYj',
        '68840HrxCRL',
        '4650HncCsc',
        '7443lAOfEz',
        'Yes'
    ];
    a0_0x2624 = function () {
        return _0x377b0d;
    };
    return a0_0x2624();
}