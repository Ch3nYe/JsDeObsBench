var a0_0xd1dec5 = a0_0x45b1;
var input = require('fs')[a0_0xd1dec5(0x0)](a0_0xd1dec5(0x1), a0_0xd1dec5(0x2));
function a0_0x5566() {
    var _0x2b7b98 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        '0\x200',
        'impossible',
        'log',
        'END'
    ];
    a0_0x5566 = function () {
        return _0x2b7b98;
    };
    return a0_0x5566();
}
var arr = input[a0_0xd1dec5(0x3)]()[a0_0xd1dec5(0x4)]('\x0a');
function a0_0x45b1(AmsBiB, key) {
    var stringArray = a0_0x5566();
    a0_0x45b1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x45b1(AmsBiB, key);
}
while (!![]) {
    var wq = arr[a0_0xd1dec5(0x5)]();
    if (wq == a0_0xd1dec5(0x6))
        break;
    wq = wq[a0_0xd1dec5(0x4)]('\x20')['map'](Number);
    var w = wq[0x0];
    var W = [];
    for (var i = 0x0; i < w; i++)
        W[i] = !![];
    var cat = {};
    while (wq[0x1]--) {
        var sw = arr['shift']()[a0_0xd1dec5(0x4)]('\x20');
        if (sw[0x0] == 's') {
            var id = sw[0x1];
            var width = sw[0x2] - 0x0;
            var cnt = 0x0;
            var ans = a0_0xd1dec5(0x7);
            for (var i = 0x0; i < w; i++) {
                cnt = W[i] ? cnt + 0x1 : 0x0;
                if (cnt == width) {
                    while (cnt--) {
                        W[i] = ![];
                        i--;
                    }
                    i++;
                    cat[id] = [
                        i,
                        width
                    ];
                    ans = i;
                    break;
                }
            }
            console[a0_0xd1dec5(0x8)](ans);
        }
        if (sw[0x0] == 'w') {
            var id = sw[0x1];
            var width = cat[id][0x1];
            var i = cat[id][0x0];
            while (width--) {
                W[i] = !![];
                i++;
            }
        }
    }
    console['log'](a0_0xd1dec5(0x9));
}