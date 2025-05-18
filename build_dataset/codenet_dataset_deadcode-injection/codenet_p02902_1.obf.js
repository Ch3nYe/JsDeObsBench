var a0_0x5e793e = a0_0x500f;
function a0_0x353f() {
    var _0x3c5efb = [
        'length',
        'pop',
        'split',
        'push',
        'QcluP',
        'concat',
        'forEach',
        'slice',
        'lqkiF',
        'shift',
        'log',
        'nSxaq',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x353f = function () {
        return _0x3c5efb;
    };
    return a0_0x353f();
}
function Main(input) {
    var _0x23ced3 = a0_0x500f;
    input = input['split']('\x0a');
    if (input[input[_0x23ced3(0x0)] - 0x1] === '') {
        input[_0x23ced3(0x1)]();
    }
    const N = input[0x0][_0x23ced3(0x2)]('\x20')[0x0] - 0x0;
    const M = input[0x0][_0x23ced3(0x2)]('\x20')[0x1] - 0x0;
    var direct = [];
    for (var i = 0x0; i <= N; i++) {
        direct[_0x23ced3(0x3)]([]);
    }
    for (var i = 0x1; i < input[_0x23ced3(0x0)]; i++) {
        if (_0x23ced3(0x4) === 'QcluP') {
            direct[input[i][_0x23ced3(0x2)]('\x20')[0x0] - 0x0][_0x23ced3(0x3)](input[i][_0x23ced3(0x2)]('\x20')[0x1] - 0x0);
        } else {
            temp['push'](e[_0x23ced3(0x5)]([f]));
        }
    }
    var memo = [];
    for (var i = 0x1; i <= N; i++) {
        memo[_0x23ced3(0x3)]([i]);
    }
    var temp;
    var str;
    while (memo['length'] > 0x0) {
        str = '';
        temp = [];
        memo[_0x23ced3(0x6)](e => {
            var _0x26abef = a0_0x500f;
            direct[e[e[_0x26abef(0x0)] - 0x1]]['forEach'](f => {
                var _0x3ba123 = a0_0x500f;
                temp[_0x3ba123(0x3)](e[_0x3ba123(0x5)]([f]));
            });
        });
        memo = temp[_0x23ced3(0x7)]();
        memo[_0x23ced3(0x6)](e => {
            var _0x2cea37 = a0_0x500f;
            if (e[e[_0x2cea37(0x0)] - 0x1] === e[0x0]) {
                if (_0x2cea37(0x8) === _0x2cea37(0x8)) {
                    temp = e[_0x2cea37(0x7)]();
                    temp[_0x2cea37(0x9)]();
                    str = temp[_0x2cea37(0x0)] + '\x0a' + temp['join']('\x0a');
                } else {
                    console[_0x2cea37(0xa)](str);
                    return;
                }
            }
        });
        if (str !== '') {
            if (_0x23ced3(0xb) !== 'RPvTm') {
                console[_0x23ced3(0xa)](str);
                return;
            } else {
                if (e[e[_0x23ced3(0x0)] - 0x1] === e[0x0]) {
                    temp = e[_0x23ced3(0x7)]();
                    temp[_0x23ced3(0x9)]();
                    str = temp[_0x23ced3(0x0)] + '\x0a' + temp['join']('\x0a');
                }
            }
        }
    }
    console[_0x23ced3(0xa)](-0x1);
}
function a0_0x500f(ZZCaBs, key) {
    var stringArray = a0_0x353f();
    a0_0x500f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x500f(ZZCaBs, key);
}
Main(require('fs')[a0_0x5e793e(0xc)](a0_0x5e793e(0xd), a0_0x5e793e(0xe)));