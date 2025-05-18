var a0_0x12079e = a0_0x4e36;
ptrn = [
    [
        0x0,
        0x1,
        0x2
    ],
    [
        0x0,
        0x2,
        0x4
    ],
    [
        0x0,
        0x4,
        0x3
    ],
    [
        0x0,
        0x3,
        0x1
    ],
    [
        0x1,
        0x5,
        0x2
    ],
    [
        0x1,
        0x2,
        0x0
    ],
    [
        0x1,
        0x0,
        0x3
    ],
    [
        0x1,
        0x3,
        0x5
    ],
    [
        0x2,
        0x1,
        0x5
    ],
    [
        0x2,
        0x5,
        0x4
    ],
    [
        0x2,
        0x4,
        0x0
    ],
    [
        0x2,
        0x0,
        0x1
    ]
];
function dice(num) {
    var _0x394058 = a0_0x4e36;
    this['n'] = num;
    this[_0x394058(0x0)] = function (top, front) {
        var _0x1fd0b0 = a0_0x4e36;
        top = this['n']['indexOf'](top);
        front = this['n'][_0x1fd0b0(0x1)](front);
        var flag = !![];
        if (top > 0x2) {
            top = 0x5 - top;
            flag = ![];
        }
        for (let i = 0x4 * top; i < 0xc; i++) {
            if (flag && ptrn[i][0x1] === front) {
                console[_0x1fd0b0(0x2)](this['n'][ptrn[i][0x2]]);
                break;
            } else if (!flag && ptrn[i][0x2] === front) {
                console[_0x1fd0b0(0x2)](this['n'][ptrn[i][0x1]]);
                break;
            }
        }
    };
}
function Main(input) {
    var _0x303f67 = a0_0x4e36;
    input = input[_0x303f67(0x3)]('\x0a');
    var dice_a = new dice(input[0x0][_0x303f67(0x3)]('\x20'));
    input[_0x303f67(0x4)](0x2, 0x2 + Number(input[0x1]))[_0x303f67(0x5)](function (d) {
        var _0x54e893 = a0_0x4e36;
        t = d['split']('\x20');
        dice_a[_0x54e893(0x0)](t[0x0], t[0x1]);
    });
}
Main(require('fs')[a0_0x12079e(0x6)](a0_0x12079e(0x7), a0_0x12079e(0x8)));
function a0_0x4e36(kIXRNV, key) {
    var stringArray = a0_0x5ad8();
    a0_0x4e36 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4e36(kIXRNV, key);
}
function a0_0x5ad8() {
    var _0x4c098b = [
        'check',
        'indexOf',
        'log',
        'split',
        'slice',
        'forEach',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5ad8 = function () {
        return _0x4c098b;
    };
    return a0_0x5ad8();
}