var a0_0x503f2f = a0_0x554c;
(function (stringArrayFunction, comparisonValue) {
    var _0x59c637 = a0_0x554c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x59c637(0x1a3)) / 0x1 + parseInt(_0x59c637(0x1a4)) / 0x2 * (parseInt(_0x59c637(0x19f)) / 0x3) + -parseInt(_0x59c637(0x1a7)) / 0x4 * (parseInt(_0x59c637(0x198)) / 0x5) + -parseInt(_0x59c637(0x199)) / 0x6 + -parseInt(_0x59c637(0x1a1)) / 0x7 + parseInt(_0x59c637(0x1a2)) / 0x8 + -parseInt(_0x59c637(0x19a)) / 0x9 * (-parseInt(_0x59c637(0x1a0)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2d92, 0xddae1));
function Main(input) {
    var _0x43c224 = a0_0x554c;
    input = input['split']('\x0a');
    if (input[input[_0x43c224(0x1a6)] - 0x1] === '') {
        input['pop']();
    }
    const N = input[0x0][_0x43c224(0x19d)]('\x20')[0x0] - 0x0;
    const M = input[0x0][_0x43c224(0x19d)]('\x20')[0x1] - 0x0;
    var direct = [];
    for (var i = 0x0; i <= N; i++) {
        direct[_0x43c224(0x19c)]([]);
    }
    for (var i = 0x1; i < input[_0x43c224(0x1a6)]; i++) {
        direct[input[i][_0x43c224(0x19d)]('\x20')[0x0] - 0x0]['push'](input[i][_0x43c224(0x19d)]('\x20')[0x1] - 0x0);
    }
    var memo = [];
    for (var i = 0x1; i <= N; i++) {
        memo[_0x43c224(0x19c)]([i]);
    }
    var temp;
    var str;
    while (memo[_0x43c224(0x1a6)] > 0x0) {
        str = '';
        temp = [];
        memo['forEach'](e => {
            var _0x3f615a = _0x43c224;
            direct[e[e[_0x3f615a(0x1a6)] - 0x1]][_0x3f615a(0x1a5)](f => {
                var _0x53e166 = _0x3f615a;
                temp[_0x53e166(0x19c)](e[_0x53e166(0x196)]([f]));
            });
        });
        memo = temp[_0x43c224(0x1a8)]();
        memo['forEach'](e => {
            var _0x4e1252 = _0x43c224;
            if (e[e[_0x4e1252(0x1a6)] - 0x1] === e[0x0]) {
                temp = e[_0x4e1252(0x1a8)]();
                temp[_0x4e1252(0x19b)]();
                str = temp[_0x4e1252(0x1a6)] + '\x0a' + temp[_0x4e1252(0x195)]('\x0a');
            }
        });
        if (str !== '') {
            console[_0x43c224(0x19e)](str);
            return;
        }
    }
    console[_0x43c224(0x19e)](-0x1);
}
function a0_0x554c(wmHqnw, key) {
    var stringArray = a0_0x2d92();
    a0_0x554c = function (index, key) {
        index = index - 0x195;
        var value = stringArray[index];
        return value;
    };
    return a0_0x554c(wmHqnw, key);
}
Main(require('fs')[a0_0x503f2f(0x197)]('/dev/stdin', 'utf8'));
function a0_0x2d92() {
    var _0x5597e4 = [
        'forEach',
        'length',
        '164dtqNSj',
        'slice',
        'join',
        'concat',
        'readFileSync',
        '207590cPJtKP',
        '9822810LaSlIn',
        '23660559jikawf',
        'shift',
        'push',
        'split',
        'log',
        '39OYPtvP',
        '10xdhgMZ',
        '11481022fQdumF',
        '11431728DOTyrz',
        '1728450afJGUx',
        '15562ObFyyE'
    ];
    a0_0x2d92 = function () {
        return _0x5597e4;
    };
    return a0_0x2d92();
}