var a0_0x8ddb = a0_0xf956;
(function (stringArrayFunction, comparisonValue) {
    var _0x2b02b2 = a0_0xf956;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2b02b2(0xf0)) / 0x1 + parseInt(_0x2b02b2(0xfc)) / 0x2 + -parseInt(_0x2b02b2(0xf6)) / 0x3 * (-parseInt(_0x2b02b2(0x100)) / 0x4) + parseInt(_0x2b02b2(0xfa)) / 0x5 * (parseInt(_0x2b02b2(0x102)) / 0x6) + parseInt(_0x2b02b2(0xf4)) / 0x7 * (parseInt(_0x2b02b2(0xf3)) / 0x8) + parseInt(_0x2b02b2(0x104)) / 0x9 * (-parseInt(_0x2b02b2(0xfe)) / 0xa) + parseInt(_0x2b02b2(0xff)) / 0xb * (-parseInt(_0x2b02b2(0x103)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3b52, 0x441b0));
function initOfficialHouse(bMax, fMax, rMax) {
    var o = Array(bMax);
    for (var b = 0x0; b < bMax; b++) {
        o[b] = Array(fMax);
        for (var f = 0x0; f < fMax; f++) {
            o[b][f] = Array(rMax);
            for (var r = 0x0; r < rMax; r++) {
                o[b][f][r] = 0x0;
            }
        }
    }
    return o;
}
function toString(o) {
    var _0x270061 = a0_0xf956;
    return o['map'](function (b) {
        var _0x29d0df = a0_0xf956;
        return b['map'](function (f) {
            var _0x59b451 = a0_0xf956;
            return '\x20' + f[_0x59b451(0xef)]('\x20');
        })[_0x29d0df(0xef)]('\x0a');
    })[_0x270061(0xef)](_0x270061(0xf7));
}
function a0_0x3b52() {
    var _0x398af4 = [
        'split',
        '170DsQVQC',
        '11WPXzzB',
        '446612aJvwOZ',
        'utf8',
        '6GTRMSq',
        '8572632kkGKDm',
        '148779JcejRq',
        'join',
        '353664IrITfE',
        'log',
        'map',
        '24Ycejje',
        '372477DzfriC',
        'forEach',
        '6BAJkup',
        '\x0a####################\x0a',
        'trim',
        '/dev/stdin',
        '2542505Ijncqs',
        'shift',
        '58538YcehVi'
    ];
    a0_0x3b52 = function () {
        return _0x398af4;
    };
    return a0_0x3b52();
}
const chunk = require('fs')['readFileSync'](a0_0x8ddb(0xf9), a0_0x8ddb(0x101));
var lines = chunk[a0_0x8ddb(0xf8)]()['split']('\x0a');
lines[a0_0x8ddb(0xfb)]();
var o = initOfficialHouse(0x4, 0x3, 0xa);
lines[a0_0x8ddb(0xf5)](function (line) {
    var _0x554865 = a0_0x8ddb;
    var bfrv = line[_0x554865(0xfd)]('\x20')[_0x554865(0xf2)](Number);
    var b = bfrv[0x0], f = bfrv[0x1], r = bfrv[0x2], v = bfrv[0x3];
    o[b - 0x1][f - 0x1][r - 0x1] += v;
});
function a0_0xf956(WzbBBv, key) {
    var stringArray = a0_0x3b52();
    a0_0xf956 = function (index, key) {
        index = index - 0xef;
        var value = stringArray[index];
        return value;
    };
    return a0_0xf956(WzbBBv, key);
}
console[a0_0x8ddb(0xf1)](toString(o));