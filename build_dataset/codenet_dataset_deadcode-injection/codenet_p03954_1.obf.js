var a0_0x1cc6da = a0_0xf34a;
function a0_0x9c43() {
    var _0x540c7d = [
        'split',
        'length',
        'ujHXM',
        'sort',
        'BoYER',
        'toGwX',
        'slice',
        'ooSJZ',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x9c43 = function () {
        return _0x540c7d;
    };
    return a0_0x9c43();
}
function a0_0xf34a(hidvxI, key) {
    var stringArray = a0_0x9c43();
    a0_0xf34a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xf34a(hidvxI, key);
}
function Main(input) {
    var _0x5030cc = a0_0xf34a;
    input = input[_0x5030cc(0x0)]('\x0a');
    tmp = input[0x1][_0x5030cc(0x0)]('\x20');
    var N = parseInt(input[0x0], 0xa);
    var array_N = new Array(0x2 * N - 0x1);
    for (var i = 0x0; i < array_N[_0x5030cc(0x1)]; i++) {
        array_N[i] = parseInt(tmp[i], 0xa);
    }
    function getArrayNext(array_i) {
        var _0x102d09 = a0_0xf34a;
        if ('ujHXM' === _0x102d09(0x2)) {
            array_i_next = new Array(array_i['length'] - 0x2);
            for (var j = 0x0; j < array_i_next[_0x102d09(0x1)]; j++) {
                var small_array = array_i['slice'](j, j + 0x3);
                array_i_next[j] = small_array[_0x102d09(0x3)](function (a, b) {
                    var _0x3d1510 = a0_0xf34a;
                    if (_0x3d1510(0x4) !== _0x3d1510(0x5)) {
                        return a < b ? -0x1 : 0x1;
                    } else {
                        array_i_next = new Array(array_i[_0x3d1510(0x1)] - 0x2);
                        for (var j = 0x0; j < array_i_next['length']; j++) {
                            var small_array = array_i[_0x3d1510(0x6)](j, j + 0x3);
                            array_i_next[j] = small_array['sort'](function (a, b) {
                                return a < b ? -0x1 : 0x1;
                            })[0x1];
                        }
                        return array_i_next;
                    }
                })[0x1];
            }
            return array_i_next;
        } else {
            array_i = getArrayNext(array_i);
        }
    }
    var array_i = array_N;
    while (array_i[_0x5030cc(0x1)] > 0x1) {
        if (_0x5030cc(0x7) !== _0x5030cc(0x7)) {
            var small_array = array_i['slice'](j, j + 0x3);
            array_i_next[j] = small_array['sort'](function (a, b) {
                return a < b ? -0x1 : 0x1;
            })[0x1];
        } else {
            array_i = getArrayNext(array_i);
        }
    }
    console[_0x5030cc(0x8)](array_i[0x0]);
}
Main(require('fs')[a0_0x1cc6da(0x9)]('/dev/stdin', a0_0x1cc6da(0xa)));