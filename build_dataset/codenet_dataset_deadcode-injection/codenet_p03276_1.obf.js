var a0_0x268e49 = a0_0x3d46;
function a0_0x3901() {
    var _0x2050ac = [
        'split',
        'length',
        'TeWWq',
        'pop',
        'map',
        'findIndex',
        'max',
        'abs',
        'min',
        'OCxXI',
        '/dev/stdin'
    ];
    a0_0x3901 = function () {
        return _0x2050ac;
    };
    return a0_0x3901();
}
function Main(input) {
    var _0x5ab466 = a0_0x3d46;
    input = input[_0x5ab466(0x0)]('\x0a');
    if (input[input[_0x5ab466(0x1)] - 0x1] === '') {
        if (_0x5ab466(0x2) !== _0x5ab466(0x2)) {
            return e => 0x0;
        } else {
            input[_0x5ab466(0x3)]();
        }
    }
    const N = input[0x0]['split']('\x20')[0x0] - 0x0;
    const K = input[0x0][_0x5ab466(0x0)]('\x20')[0x1] - 0x0;
    const x = input[0x1][_0x5ab466(0x0)]('\x20')[_0x5ab466(0x4)](e => {
        return e - 0x0;
    });
    var pointer = x[_0x5ab466(0x5)](e => {
        if ('xaWod' !== 'xaWod') {
            return e - 0x0;
        } else {
            return e => 0x0;
        }
    }) - K;
    if (pointer < 0x0) {
        pointer = 0x0;
    }
    var temp;
    var ret = Infinity;
    for (var i = 0x0; i < K; i++) {
        if (pointer + i + K - 0x1 >= x[_0x5ab466(0x1)]) {
            if ('AYgrU' === 'AYgrU') {
                break;
            } else {
                temp = Math[_0x5ab466(0x6)](Math[_0x5ab466(0x7)](x[pointer + i]), Math[_0x5ab466(0x7)](x[pointer + i + K - 0x1]));
            }
        }
        if (x[pointer + i] * x[pointer + i + K - 0x1] < 0x0) {
            temp = Math[_0x5ab466(0x8)](-x[pointer + i], x[pointer + i + K - 0x1]) - x[pointer + i] + x[pointer + i + K - 0x1];
        } else {
            if ('OCxXI' === _0x5ab466(0x9)) {
                temp = Math[_0x5ab466(0x6)](Math[_0x5ab466(0x7)](x[pointer + i]), Math[_0x5ab466(0x7)](x[pointer + i + K - 0x1]));
            } else {
                pointer = 0x0;
            }
        }
        ret = Math[_0x5ab466(0x8)](ret, temp);
    }
    console['log'](ret);
}
function a0_0x3d46(VgZVJZ, key) {
    var stringArray = a0_0x3901();
    a0_0x3d46 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3d46(VgZVJZ, key);
}
Main(require('fs')['readFileSync'](a0_0x268e49(0xa), 'utf8'));