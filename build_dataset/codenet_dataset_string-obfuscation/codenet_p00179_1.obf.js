function a0_0x4339(ocweeI, key) {
    var stringArray = a0_0x981b();
    a0_0x4339 = function (index, key) {
        index = index - 0x1d5;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4339(ocweeI, key);
}
var a0_0x58d607 = a0_0x4339;
(function (stringArrayFunction, comparisonValue) {
    var _0x14acea = a0_0x4339;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x14acea(0x1e6)) / 0x1 * (-parseInt(_0x14acea(0x1df)) / 0x2) + -parseInt(_0x14acea(0x1d5)) / 0x3 * (-parseInt(_0x14acea(0x1e0)) / 0x4) + parseInt(_0x14acea(0x1e4)) / 0x5 + -parseInt(_0x14acea(0x1da)) / 0x6 + -parseInt(_0x14acea(0x1db)) / 0x7 + parseInt(_0x14acea(0x1de)) / 0x8 * (parseInt(_0x14acea(0x1d8)) / 0x9) + parseInt(_0x14acea(0x1ea)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x981b, 0xdaf16));
function BFS(x) {
    var _0x4fa44b = a0_0x4339;
    var obj = {};
    var bfs = [[
            x,
            0x0
        ]];
    obj[x] = !![];
    while (!![]) {
        if (bfs[_0x4fa44b(0x1e8)] == 0x0) {
            ans = 'NA';
            break;
        }
        var leaf = bfs['shift']();
        var str = leaf[0x0];
        var cnt = leaf[0x1];
        if (/^0+$|^1+$|^2+$/[_0x4fa44b(0x1e1)](str)) {
            ans = cnt;
            break;
        }
        for (var i = 0x0; i < str[_0x4fa44b(0x1e8)] - 0x1; i++) {
            if (str[i] == str[i + 0x1])
                continue;
            var arr = str[_0x4fa44b(0x1dc)]('');
            var color = 0x3 - +arr[i] - +arr[i + 0x1];
            arr[i] = color;
            arr[i + 0x1] = color;
            var Str = arr[_0x4fa44b(0x1e2)]('');
            if (obj['hasOwnProperty'](Str) == ![]) {
                bfs[_0x4fa44b(0x1e3)]([
                    Str,
                    cnt + 0x1
                ]);
                obj[Str] = !![];
            }
        }
    }
}
var input = require('fs')[a0_0x58d607(0x1d7)](a0_0x58d607(0x1e9), a0_0x58d607(0x1d6));
var Arr = input[a0_0x58d607(0x1e5)]()['split']('\x0a');
while (!![]) {
    var rgb = Arr[a0_0x58d607(0x1e7)]();
    if (rgb == '0')
        break;
    rgb = rgb[a0_0x58d607(0x1d9)](/r/g, '0')[a0_0x58d607(0x1d9)](/g/g, '1')[a0_0x58d607(0x1d9)](/b/g, '2');
    var ans;
    BFS(rgb);
    console[a0_0x58d607(0x1dd)](ans);
}
function a0_0x981b() {
    var _0x37756a = [
        'trim',
        '986184XiriSV',
        'shift',
        'length',
        '/dev/stdin',
        '6631200QPCVGA',
        '186QpouzY',
        'utf8',
        'readFileSync',
        '327411ZNaISc',
        'replace',
        '4195920WNgVNN',
        '11715662VbMMOq',
        'split',
        'log',
        '360VduaOJ',
        '2TPKZyc',
        '62324iuKQzS',
        'test',
        'join',
        'push',
        '4948815CsLxpQ'
    ];
    a0_0x981b = function () {
        return _0x37756a;
    };
    return a0_0x981b();
}