var a0_0x51fb4b = a0_0x5afe;
(function (stringArrayFunction, comparisonValue) {
    var _0x4169dd = a0_0x5afe;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4169dd(0x1b6)) / 0x1 + parseInt(_0x4169dd(0x1b8)) / 0x2 * (-parseInt(_0x4169dd(0x1a8)) / 0x3) + -parseInt(_0x4169dd(0x1b5)) / 0x4 * (-parseInt(_0x4169dd(0x1b2)) / 0x5) + parseInt(_0x4169dd(0x1ab)) / 0x6 * (-parseInt(_0x4169dd(0x1ae)) / 0x7) + parseInt(_0x4169dd(0x1af)) / 0x8 * (parseInt(_0x4169dd(0x1b4)) / 0x9) + -parseInt(_0x4169dd(0x1b3)) / 0xa * (parseInt(_0x4169dd(0x1b7)) / 0xb) + parseInt(_0x4169dd(0x1b1)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1402, 0xd66b9));
function a0_0x1402() {
    var _0x2dc147 = [
        '259270DIZtoN',
        '15066yEirNO',
        '3819844eDIRCn',
        '317541OEIHGq',
        '198ZnNLNa',
        '8402zuTjHI',
        'length',
        '3JSOotl',
        'split',
        '/dev/stdin',
        '114ztdxlL',
        'utf8',
        'log',
        '87717spaExX',
        '712bWpeme',
        'readFileSync',
        '1989036MFDuvW',
        '5zdhYzY'
    ];
    a0_0x1402 = function () {
        return _0x2dc147;
    };
    return a0_0x1402();
}
function Main(input) {
    var _0x529633 = a0_0x5afe;
    input = input[_0x529633(0x1a9)]('\x0a');
    tmp = input[0x1][_0x529633(0x1a9)]('\x20');
    var N = parseInt(input[0x0], 0xa);
    var array_N = new Array(0x2 * N - 0x1);
    for (var i = 0x0; i < array_N[_0x529633(0x1b9)]; i++) {
        array_N[i] = parseInt(tmp[i], 0xa);
    }
    function getArrayNext(array_i) {
        var _0x34ce9a = _0x529633;
        array_i_next = new Array(array_i[_0x34ce9a(0x1b9)] - 0x2);
        for (var j = 0x0; j < array_i_next[_0x34ce9a(0x1b9)]; j++) {
            var small_array = array_i['slice'](j, j + 0x3);
            array_i_next[j] = small_array['sort'](function (a, b) {
                return a < b ? -0x1 : 0x1;
            })[0x1];
        }
        return array_i_next;
    }
    var array_i = array_N;
    while (array_i['length'] > 0x1) {
        array_i = getArrayNext(array_i);
    }
    console[_0x529633(0x1ad)](array_i[0x0]);
}
function a0_0x5afe(mSKZfh, key) {
    var stringArray = a0_0x1402();
    a0_0x5afe = function (index, key) {
        index = index - 0x1a8;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5afe(mSKZfh, key);
}
Main(require('fs')[a0_0x51fb4b(0x1b0)](a0_0x51fb4b(0x1aa), a0_0x51fb4b(0x1ac)));