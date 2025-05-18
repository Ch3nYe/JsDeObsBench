function a0_0x402f(VQVEQu, key) {
    var stringArray = a0_0x1696();
    a0_0x402f = function (index, key) {
        index = index - 0x7f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x402f(VQVEQu, key);
}
var a0_0x2c8b99 = a0_0x402f;
(function (stringArrayFunction, comparisonValue) {
    var _0x5d7976 = a0_0x402f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5d7976(0x8b)) / 0x1 + -parseInt(_0x5d7976(0x90)) / 0x2 * (-parseInt(_0x5d7976(0x9b)) / 0x3) + parseInt(_0x5d7976(0x85)) / 0x4 * (-parseInt(_0x5d7976(0x8f)) / 0x5) + parseInt(_0x5d7976(0x88)) / 0x6 * (parseInt(_0x5d7976(0x97)) / 0x7) + -parseInt(_0x5d7976(0x99)) / 0x8 * (-parseInt(_0x5d7976(0x81)) / 0x9) + -parseInt(_0x5d7976(0x89)) / 0xa * (parseInt(_0x5d7976(0x94)) / 0xb) + -parseInt(_0x5d7976(0x7f)) / 0xc * (parseInt(_0x5d7976(0x8c)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1696, 0x9f962));
process[a0_0x2c8b99(0x8d)][a0_0x2c8b99(0x98)]();
process[a0_0x2c8b99(0x8d)][a0_0x2c8b99(0x84)](a0_0x2c8b99(0x96));
function a0_0x1696() {
    var _0x33f3dc = [
        'resume',
        '8uFexcj',
        'split',
        '21705CdYYnD',
        '4588332SApznQ',
        'splice',
        '6282072bOxvcy',
        'filter',
        'apply',
        'setEncoding',
        '20PdlzCd',
        'log',
        'indexOf',
        '108XLhYDr',
        '20nKFSyz',
        'reduce',
        '778152vRBTnp',
        '26XxcmDG',
        'stdin',
        'min',
        '1304730lnnXxe',
        '220dEqBom',
        'length',
        'round',
        'shift',
        '2435345kfBRaT',
        'max',
        'utf8',
        '347627PXbHHS'
    ];
    a0_0x1696 = function () {
        return _0x33f3dc;
    };
    return a0_0x1696();
}
process['stdin']['on']('data', function (line) {
    before(line);
});
var log = console[a0_0x2c8b99(0x86)];
function before(line) {
    var _0x118eb9 = a0_0x2c8b99;
    var lines = line[_0x118eb9(0x9a)]('\x0a');
    lines = lines[_0x118eb9(0x82)](function (e) {
        return e !== '';
    });
    main(lines);
}
function main(lines) {
    var _0x5ddd2f = a0_0x2c8b99;
    var ls = lines['map'](function (e) {
        return Number(e);
    });
    while (ls[_0x5ddd2f(0x91)] > 0x1) {
        var tpl = ls[_0x5ddd2f(0x93)]();
        var arr = ls['slice'](0x0, tpl);
        ls = ls['slice'](tpl);
        var mid = arr[_0x5ddd2f(0x87)](Math[_0x5ddd2f(0x8e)][_0x5ddd2f(0x83)](this, arr));
        arr[_0x5ddd2f(0x80)](mid, 0x1);
        var Mid = arr[_0x5ddd2f(0x87)](Math[_0x5ddd2f(0x95)][_0x5ddd2f(0x83)](this, arr));
        arr[_0x5ddd2f(0x80)](Mid, 0x1);
        var sum = arr[_0x5ddd2f(0x8a)](function (p, c, i, a) {
            return p + c;
        });
        log(Math[_0x5ddd2f(0x92)](sum / arr[_0x5ddd2f(0x91)]));
    }
}