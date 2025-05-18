var a0_0x3f6dae = a0_0x350f;
function BFS(x) {
    var _0x5ba728 = a0_0x350f;
    var obj = {};
    var bfs = [[
            x,
            0x0
        ]];
    obj[x] = !![];
    while (!![]) {
        if (bfs[_0x5ba728(0x0)] == 0x0) {
            ans = 'NA';
            break;
        }
        var leaf = bfs[_0x5ba728(0x1)]();
        var str = leaf[0x0];
        var cnt = leaf[0x1];
        if (/^0+$|^1+$|^2+$/[_0x5ba728(0x2)](str)) {
            ans = cnt;
            break;
        }
        for (var i = 0x0; i < str[_0x5ba728(0x0)] - 0x1; i++) {
            if (str[i] == str[i + 0x1])
                continue;
            var arr = str['split']('');
            var color = 0x3 - +arr[i] - +arr[i + 0x1];
            arr[i] = color;
            arr[i + 0x1] = color;
            var Str = arr[_0x5ba728(0x3)]('');
            if (obj[_0x5ba728(0x4)](Str) == ![]) {
                bfs['push']([
                    Str,
                    cnt + 0x1
                ]);
                obj[Str] = !![];
            }
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x3f6dae(0x5));
function a0_0x193d() {
    var _0x1299b6 = [
        'length',
        'shift',
        'test',
        'join',
        'hasOwnProperty',
        'utf8',
        'trim',
        'replace',
        'log'
    ];
    a0_0x193d = function () {
        return _0x1299b6;
    };
    return a0_0x193d();
}
function a0_0x350f(KopDDG, key) {
    var stringArray = a0_0x193d();
    a0_0x350f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x350f(KopDDG, key);
}
var Arr = input[a0_0x3f6dae(0x6)]()['split']('\x0a');
while (!![]) {
    var rgb = Arr[a0_0x3f6dae(0x1)]();
    if (rgb == '0')
        break;
    rgb = rgb['replace'](/r/g, '0')[a0_0x3f6dae(0x7)](/g/g, '1')[a0_0x3f6dae(0x7)](/b/g, '2');
    var ans;
    BFS(rgb);
    console[a0_0x3f6dae(0x8)](ans);
}