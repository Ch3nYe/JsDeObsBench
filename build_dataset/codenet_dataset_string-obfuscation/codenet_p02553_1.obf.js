var a0_0x2b0452 = a0_0x2495;
(function (stringArrayFunction, comparisonValue) {
    var _0x57f382 = a0_0x2495;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x57f382(0xc1)) / 0x1 + -parseInt(_0x57f382(0xce)) / 0x2 * (parseInt(_0x57f382(0xd4)) / 0x3) + parseInt(_0x57f382(0xc9)) / 0x4 * (-parseInt(_0x57f382(0xc6)) / 0x5) + -parseInt(_0x57f382(0xd5)) / 0x6 * (parseInt(_0x57f382(0xc5)) / 0x7) + -parseInt(_0x57f382(0xd1)) / 0x8 + parseInt(_0x57f382(0xd0)) / 0x9 + parseInt(_0x57f382(0xcc)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5519, 0xd4db6));
process[a0_0x2b0452(0xc8)][a0_0x2b0452(0xc7)]();
function a0_0x5519() {
    var _0x7f0371 = [
        'setEncoding',
        '2479419zqvIXu',
        '278034bTtAnG',
        'line',
        '1121988vilwQC',
        'close',
        'utf8',
        'max',
        '70eLlNgg',
        '75wEpuEa',
        'resume',
        'stdin',
        '107808KrHQkG',
        'stdout',
        'apply',
        '28307450cYEbIy',
        'push',
        '2uoYYUl',
        'createInterface',
        '15005700GwTYPe',
        '6480416orHZiZ',
        'log'
    ];
    a0_0x5519 = function () {
        return _0x7f0371;
    };
    return a0_0x5519();
}
process[a0_0x2b0452(0xc8)][a0_0x2b0452(0xd3)](a0_0x2b0452(0xc3));
var lines = [];
var t = [];
var reader = require('readline')[a0_0x2b0452(0xcf)]({
    'input': process['stdin'],
    'output': process[a0_0x2b0452(0xca)]
});
reader['on'](a0_0x2b0452(0xc0), line => {
    var _0x3f694a = a0_0x2b0452;
    lines[_0x3f694a(0xcd)](line);
});
function a0_0x2495(abTxHY, key) {
    var stringArray = a0_0x5519();
    a0_0x2495 = function (index, key) {
        index = index - 0xc0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2495(abTxHY, key);
}
reader['on'](a0_0x2b0452(0xc2), () => {
    var _0x54d0e2 = a0_0x2b0452;
    var x = lines[0x0]['split']('\x20');
    var a = parseInt(x[0x0]);
    var b = parseInt(x[0x1]);
    var c = parseInt(x[0x2]);
    var d = parseInt(x[0x3]);
    var ac = a * c;
    var ad = a * d;
    var bc = b * c;
    var bd = b * d;
    t[_0x54d0e2(0xcd)](ac);
    t[_0x54d0e2(0xcd)](ad);
    t['push'](bc);
    t[_0x54d0e2(0xcd)](bd);
    console[_0x54d0e2(0xd2)](Math[_0x54d0e2(0xc4)][_0x54d0e2(0xcb)](null, t));
});