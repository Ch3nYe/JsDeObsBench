var a0_0x3145f8 = a0_0x36ef;
function Main(input) {
    var _0x2a64e5 = a0_0x36ef;
    var S = input[_0x2a64e5(0x0)]('');
    var Slong = S[_0x2a64e5(0x1)];
    var Muki = '>';
    var Out = 0x1;
    var V = [];
    var Left = 0x0;
    var Right = 0x0;
    var Sum = 0x0;
    for (var i = 0x0; i < Slong; i++) {
        if (S[i] == Muki) {
            if (Muki == '>') {
                if ('toLxb' === _0x2a64e5(0x2)) {
                    Left++;
                } else {
                    if (V[i - 0x1]['R'] < V[i]['L']) {
                        V[i - 0x1]['R']--;
                    } else {
                        V[i]['L']--;
                    }
                }
            } else {
                Right++;
            }
            Out = 0x0;
        } else {
            if ('rBIeP' === _0x2a64e5(0x3)) {
                V[_0x2a64e5(0x4)]({
                    'L': Left,
                    'R': Right
                });
            } else {
                if (Muki == '<') {
                    if (_0x2a64e5(0x5) === _0x2a64e5(0x5)) {
                        V[_0x2a64e5(0x4)]({
                            'L': Left,
                            'R': Right
                        });
                        Muki = '>';
                        Left = 0x0;
                        Right = 0x0;
                        Left++;
                        Out = 0x1;
                    } else {
                        Left++;
                    }
                } else {
                    Muki = '<';
                    Right++;
                    Out = 0x0;
                }
            }
        }
    }
    if (Out == 0x0) {
        V[_0x2a64e5(0x4)]({
            'L': Left,
            'R': Right
        });
    }
    for (var i = 0x1; i < V['length']; i++) {
        if (_0x2a64e5(0x6) === _0x2a64e5(0x6)) {
            if (V[i - 0x1]['R'] < V[i]['L']) {
                V[i - 0x1]['R']--;
            } else {
                if ('StdcM' === _0x2a64e5(0x7)) {
                    V[i]['L']--;
                } else {
                    V[_0x2a64e5(0x4)]({
                        'L': Left,
                        'R': Right
                    });
                    Muki = '>';
                    Left = 0x0;
                    Right = 0x0;
                    Left++;
                    Out = 0x1;
                }
            }
        } else {
            V[i - 0x1]['R']--;
        }
    }
    for (var i = 0x0; i < V[_0x2a64e5(0x1)]; i++) {
        Sum += V[i]['L'] * (V[i]['L'] + 0x1) / 0x2;
        Sum += V[i]['R'] * (V[i]['R'] + 0x1) / 0x2;
    }
    console[_0x2a64e5(0x8)](Sum);
}
Main(require('fs')[a0_0x3145f8(0x9)](a0_0x3145f8(0xa), a0_0x3145f8(0xb)));
function a0_0x36ef(zPjYJm, key) {
    var stringArray = a0_0x1432();
    a0_0x36ef = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x36ef(zPjYJm, key);
}
function a0_0x1432() {
    var _0x3aba81 = [
        'split',
        'length',
        'toLxb',
        'cuBYe',
        'push',
        'JtKsX',
        'CFwKy',
        'StdcM',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1432 = function () {
        return _0x3aba81;
    };
    return a0_0x1432();
}