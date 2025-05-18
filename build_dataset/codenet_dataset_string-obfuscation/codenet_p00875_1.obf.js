var a0_0x4d1ced = a0_0x2cdd;
(function (stringArrayFunction, comparisonValue) {
    var _0x239115 = a0_0x2cdd;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x239115(0x7b)) / 0x1 + -parseInt(_0x239115(0x69)) / 0x2 + -parseInt(_0x239115(0x73)) / 0x3 + parseInt(_0x239115(0x6c)) / 0x4 * (-parseInt(_0x239115(0x72)) / 0x5) + -parseInt(_0x239115(0x70)) / 0x6 * (parseInt(_0x239115(0x6d)) / 0x7) + parseInt(_0x239115(0x74)) / 0x8 * (-parseInt(_0x239115(0x71)) / 0x9) + parseInt(_0x239115(0x7a)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x41e7, 0x55d11));
function BFS() {
    var _0x101bdb = a0_0x2cdd;
    var bfs = [[
            s0,
            0x0
        ]];
    while (!![]) {
        if (bfs[_0x101bdb(0x78)] == 0x0)
            break;
        var [leaf, cnt] = bfs[_0x101bdb(0x6f)]();
        if (leaf == s1) {
            flag = !![];
            console['log'](cnt);
            break;
        }
        ab[_0x101bdb(0x79)](v => {
            var _0x2cc0e0 = _0x101bdb;
            if (leaf['includes'](v[0x0])) {
                var re = new RegExp(v[0x0], 'g');
                var str = leaf[_0x2cc0e0(0x6b)](re, v[0x1]);
                if (str[_0x2cc0e0(0x78)] <= 0xa)
                    bfs[_0x2cc0e0(0x77)]([
                        str,
                        cnt + 0x1
                    ]);
            }
        });
    }
}
var input = require('fs')[a0_0x4d1ced(0x6a)](a0_0x4d1ced(0x7c), 'utf8');
var arr = input[a0_0x4d1ced(0x6e)]()[a0_0x4d1ced(0x76)]('\x0a');
while (!![]) {
    var n = arr[a0_0x4d1ced(0x6f)]() - 0x0;
    if (n == 0x0)
        break;
    var ab = arr[a0_0x4d1ced(0x75)](0x0, n)[a0_0x4d1ced(0x7d)](v => v['split']('\x20'));
    ;
    arr = arr[a0_0x4d1ced(0x75)](n);
    var s0 = arr[a0_0x4d1ced(0x6f)]();
    var s1 = arr[a0_0x4d1ced(0x6f)]();
    var flag = ![];
    BFS();
    if (!flag)
        console['log'](-0x1);
}
function a0_0x2cdd(YeyMMU, key) {
    var stringArray = a0_0x41e7();
    a0_0x2cdd = function (index, key) {
        index = index - 0x69;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2cdd(YeyMMU, key);
}
function a0_0x41e7() {
    var _0x3903e1 = [
        '260986HZSjzx',
        '/dev/stdin',
        'map',
        '622074FhHzUo',
        'readFileSync',
        'replace',
        '260GIEIhP',
        '400127AVzrrK',
        'trim',
        'shift',
        '12oqcUGO',
        '8559hioRAh',
        '45565uWYNSB',
        '931674OwkBRs',
        '408ocfEQw',
        'slice',
        'split',
        'push',
        'length',
        'forEach',
        '14672820APBOHW'
    ];
    a0_0x41e7 = function () {
        return _0x3903e1;
    };
    return a0_0x41e7();
}