var a0_0x4ae67f = a0_0x6b43;
function a0_0x6b43(ALwimn, key) {
    var stringArray = a0_0x36f6();
    a0_0x6b43 = function (index, key) {
        index = index - 0x1a3;
        var value = stringArray[index];
        return value;
    };
    return a0_0x6b43(ALwimn, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x65070a = a0_0x6b43;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x65070a(0x1b7)) / 0x1 + -parseInt(_0x65070a(0x1a9)) / 0x2 + -parseInt(_0x65070a(0x1a7)) / 0x3 * (parseInt(_0x65070a(0x1aa)) / 0x4) + -parseInt(_0x65070a(0x1b6)) / 0x5 + -parseInt(_0x65070a(0x1a4)) / 0x6 * (-parseInt(_0x65070a(0x1b5)) / 0x7) + -parseInt(_0x65070a(0x1ad)) / 0x8 * (-parseInt(_0x65070a(0x1a5)) / 0x9) + -parseInt(_0x65070a(0x1a3)) / 0xa * (-parseInt(_0x65070a(0x1ac)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x36f6, 0x2a63d));
function bomb() {
    var _0x19f91f = a0_0x6b43;
    var obj = {};
    var ans = 'NA';
    var leaf = [
        [
            0x0,
            0x0,
            0x0
        ],
        [
            0x1,
            0x0,
            0x0
        ]
    ];
    while (!![]) {
        if (leaf[_0x19f91f(0x1af)] == 0x0)
            break;
        var ary = leaf[_0x19f91f(0x1a8)]();
        var x = ary[0x0];
        var y = ary[0x1];
        if (obj['hasOwnProperty'](x + ',' + y))
            continue;
        else
            obj[x + ',' + y] = !![];
        var cnt = ary[0x2];
        var v = xy[x][y];
        if (v == 0x1) {
            while (!![]) {
                y++;
                if (xy[x][y] != 0x1) {
                    y--;
                    break;
                }
            }
        } else if (v == 0x2) {
            while (!![]) {
                y--;
                if (xy[x][y] != 0x2)
                    break;
            }
        }
        if (y == n - 0x1) {
            ans = cnt;
            break;
        }
        for (var i = 0x0; i <= 0x2; i++)
            leaf[_0x19f91f(0x1ab)]([
                0x1 - x,
                y + i,
                cnt + 0x1
            ]);
    }
    return ans;
}
var input = require('fs')[a0_0x4ae67f(0x1b1)](a0_0x4ae67f(0x1b4), a0_0x4ae67f(0x1b0));
var arr = input[a0_0x4ae67f(0x1ae)]()[a0_0x4ae67f(0x1a6)]('\x0a');
function a0_0x36f6() {
    var _0x4045da = [
        'split',
        '12lpJxBg',
        'shift',
        '466688DkGrbX',
        '136628kzbfVY',
        'push',
        '187594YnwAIi',
        '16DuOCFU',
        'trim',
        'length',
        'utf8',
        'readFileSync',
        'log',
        'map',
        '/dev/stdin',
        '35veseMw',
        '1045790QxYBcY',
        '264904UeogHE',
        '370JYqBKR',
        '359622tGKWIe',
        '391410bQWWjY'
    ];
    a0_0x36f6 = function () {
        return _0x4045da;
    };
    return a0_0x36f6();
}
while (!![]) {
    var n = arr[a0_0x4ae67f(0x1a8)]() - 0x0;
    if (n == 0x0)
        break;
    var xy = [];
    xy[0x0] = arr[a0_0x4ae67f(0x1a8)]()['split']('\x20')['map'](Number);
    xy[0x1] = arr['shift']()[a0_0x4ae67f(0x1a6)]('\x20')[a0_0x4ae67f(0x1b3)](Number);
    console[a0_0x4ae67f(0x1b2)](bomb());
}