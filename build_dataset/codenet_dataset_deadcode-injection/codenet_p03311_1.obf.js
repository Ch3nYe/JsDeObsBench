var a0_0xd01be8 = a0_0x32a3;
function Main(input) {
    var _0x115fc8 = a0_0x32a3;
    input = input['split']('\x0a');
    if (input[input[_0x115fc8(0x0)] - 0x1] === '') {
        if ('HjTrI' === 'HjTrI') {
            input['pop']();
        } else {
            if (!e[_0x115fc8(0x1)](k)) {
                next[_0x115fc8(0x2)](e[_0x115fc8(0x3)]([k]));
            }
        }
    }
    const N = input[0x0]['split']('\x20')[0x0] - 0x0;
    var array = input[0x1][_0x115fc8(0x4)]('\x20')[_0x115fc8(0x5)]((e, i) => {
        return e - i - 0x1;
    })[_0x115fc8(0x6)]((a, b) => {
        var _0x503df3 = a0_0x32a3;
        if (_0x503df3(0x7) !== _0x503df3(0x7)) {
            return a - b;
        } else {
            return a - b;
        }
    });
    console[_0x115fc8(0x8)](array[_0x115fc8(0x9)]((acc, cur) => {
        var _0xdc7928 = a0_0x32a3;
        if ('PKWXr' !== _0xdc7928(0xa)) {
            return acc + Math[_0xdc7928(0xb)](cur - array[Math[_0xdc7928(0xc)](array[_0xdc7928(0x0)] / 0x2)]);
        } else {
            return acc + Math[_0xdc7928(0xb)](cur - array[Math[_0xdc7928(0xc)](array[_0xdc7928(0x0)] / 0x2)]);
        }
    }, 0x0));
}
function a0_0x3986() {
    var _0x297d0f = [
        'length',
        'includes',
        'push',
        'concat',
        'split',
        'map',
        'sort',
        'SHxuE',
        'log',
        'reduce',
        'ONUif',
        'abs',
        'floor',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'forEach'
    ];
    a0_0x3986 = function () {
        return _0x297d0f;
    };
    return a0_0x3986();
}
function a0_0x32a3(XFHNWT, key) {
    var stringArray = a0_0x3986();
    a0_0x32a3 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x32a3(XFHNWT, key);
}
Main(require('fs')[a0_0xd01be8(0xd)](a0_0xd01be8(0xe), a0_0xd01be8(0xf)));
function permutation(n, k) {
    var _0x5705a1 = a0_0x32a3;
    var ret = [[]];
    var next;
    for (var i = 0x0; i < k; i++) {
        next = [];
        ret[_0x5705a1(0x10)](e => {
            var _0x11b3ae = a0_0x32a3;
            for (var k = 0x1; k <= n; k++) {
                if (!e[_0x11b3ae(0x1)](k)) {
                    next[_0x11b3ae(0x2)](e[_0x11b3ae(0x3)]([k]));
                }
            }
        });
        ret = next[_0x5705a1(0x3)]([]);
    }
    return ret;
}