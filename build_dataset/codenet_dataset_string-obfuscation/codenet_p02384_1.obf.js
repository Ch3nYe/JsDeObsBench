var a0_0x4abb29 = a0_0x9dac;
function a0_0x7d20() {
    var _0x4ad2ff = [
        '2659566CRvfXs',
        '28BOFFvJ',
        'indexOf',
        'log',
        '285003UZDffr',
        '3shvsLA',
        '921625aIauNe',
        '1040672zeJxvT',
        'slice',
        '20PwjJOh',
        'readFileSync',
        '8qixxxf',
        '18260077AoIQSg',
        'split',
        '/dev/stdin',
        '1855566hiAQDl',
        '263252kYnEnM'
    ];
    a0_0x7d20 = function () {
        return _0x4ad2ff;
    };
    return a0_0x7d20();
}
function a0_0x9dac(jsxIEE, key) {
    var stringArray = a0_0x7d20();
    a0_0x9dac = function (index, key) {
        index = index - 0xb5;
        var value = stringArray[index];
        return value;
    };
    return a0_0x9dac(jsxIEE, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x5f5a55 = a0_0x9dac;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5f5a55(0xc4)) / 0x1 + -parseInt(_0x5f5a55(0xbf)) / 0x2 * (-parseInt(_0x5f5a55(0xc5)) / 0x3) + -parseInt(_0x5f5a55(0xba)) / 0x4 * (parseInt(_0x5f5a55(0xb5)) / 0x5) + -parseInt(_0x5f5a55(0xc0)) / 0x6 + -parseInt(_0x5f5a55(0xc1)) / 0x7 * (parseInt(_0x5f5a55(0xb6)) / 0x8) + parseInt(_0x5f5a55(0xbe)) / 0x9 * (-parseInt(_0x5f5a55(0xb8)) / 0xa) + parseInt(_0x5f5a55(0xbb)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x7d20, 0x51109));
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
    this['n'] = num;
    this['check'] = function (top, front) {
        var _0x5642a3 = a0_0x9dac;
        top = this['n'][_0x5642a3(0xc2)](top);
        front = this['n'][_0x5642a3(0xc2)](front);
        var flag = !![];
        if (top > 0x2) {
            top = 0x5 - top;
            flag = ![];
        }
        for (let i = 0x4 * top; i < 0xc; i++) {
            if (flag && ptrn[i][0x1] === front) {
                console[_0x5642a3(0xc3)](this['n'][ptrn[i][0x2]]);
                break;
            } else if (!flag && ptrn[i][0x2] === front) {
                console['log'](this['n'][ptrn[i][0x1]]);
                break;
            }
        }
    };
}
function Main(input) {
    var _0x595dca = a0_0x9dac;
    input = input[_0x595dca(0xbc)]('\x0a');
    var dice_a = new dice(input[0x0]['split']('\x20'));
    input[_0x595dca(0xb7)](0x2, 0x2 + Number(input[0x1]))['forEach'](function (d) {
        var _0x18ddff = _0x595dca;
        t = d[_0x18ddff(0xbc)]('\x20');
        dice_a['check'](t[0x0], t[0x1]);
    });
}
Main(require('fs')[a0_0x4abb29(0xb9)](a0_0x4abb29(0xbd), 'utf8'));