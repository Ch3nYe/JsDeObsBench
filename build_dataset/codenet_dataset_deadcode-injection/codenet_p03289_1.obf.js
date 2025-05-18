function a0_0x6df5(utlVXY, key) {
    var stringArray = a0_0x27a7();
    a0_0x6df5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x6df5(utlVXY, key);
}
function a0_0x27a7() {
    var _0x388de1 = [
        'trim',
        'split',
        'map',
        'length',
        'Vdjne',
        'bPRJe',
        'log',
        'iiNbL',
        'splice',
        'PAcMu',
        'wQcwr',
        'test',
        'lscXd',
        'GQXkh',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x27a7 = function () {
        return _0x388de1;
    };
    return a0_0x27a7();
}
var a0_0x2697bc = a0_0x6df5;
function main(input) {
    var _0x50e5f0 = a0_0x6df5;
    input = input[_0x50e5f0(0x0)]();
    var arr = input[_0x50e5f0(0x1)]('')[_0x50e5f0(0x2)](n => n);
    var ans = 0x0;
    if (arr[0x0] == 'A') {
        ans++;
    }
    var temp = 0x0;
    var memo = 0x0;
    for (var i = 0x2; i < arr[_0x50e5f0(0x3)] - 0x1; i++) {
        if (_0x50e5f0(0x4) === _0x50e5f0(0x4)) {
            if (arr[i] == 'C') {
                if (_0x50e5f0(0x5) === _0x50e5f0(0x5)) {
                    temp++;
                    memo = i;
                } else {
                    console[_0x50e5f0(0x6)]('WA');
                }
            }
        } else {
            ans++;
        }
    }
    if (temp == 0x1) {
        if ('iiNbL' !== _0x50e5f0(0x7)) {
            ans++;
        } else {
            ans++;
        }
    }
    if (ans == 0x2) {
        arr[_0x50e5f0(0x8)](0x0, 0x1);
        arr[_0x50e5f0(0x8)](memo - 0x1, 0x1);
        if (/A-Z/['test'](arr) == ![]) {
            ans++;
        }
        if (ans == 0x3) {
            console[_0x50e5f0(0x6)]('AC');
        } else {
            if (_0x50e5f0(0x9) === _0x50e5f0(0xa)) {
                arr[_0x50e5f0(0x8)](0x0, 0x1);
                arr[_0x50e5f0(0x8)](memo - 0x1, 0x1);
                if (/A-Z/[_0x50e5f0(0xb)](arr) == ![]) {
                    ans++;
                }
                if (ans == 0x3) {
                    console['log']('AC');
                } else {
                    console[_0x50e5f0(0x6)]('WA');
                }
            } else {
                console['log']('WA');
            }
        }
    } else {
        if (_0x50e5f0(0xc) === _0x50e5f0(0xd)) {
            if (arr[i] == 'C') {
                temp++;
                memo = i;
            }
        } else {
            console[_0x50e5f0(0x6)]('WA');
        }
    }
}
main(require('fs')[a0_0x2697bc(0xe)](a0_0x2697bc(0xf), a0_0x2697bc(0x10)));