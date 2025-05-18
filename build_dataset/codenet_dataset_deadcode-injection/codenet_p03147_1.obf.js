var a0_0x1b2779 = a0_0x58d4;
function search(h) {
    var is_start = ![];
    for (var i = 0x0; i < h['length']; i++) {
        if (is_start) {
            if (h[i] == 0x0) {
                break;
            }
            h[i] -= 0x1;
        } else {
            if (h[i] == 0x0) {
                continue;
            }
            is_start = !![];
            h[i] -= 0x1;
        }
    }
    return h;
}
function main(arg) {
    var _0x1f57f0 = a0_0x58d4;
    var h = arg[_0x1f57f0(0x0)]('\x0a')[0x1]['split']('\x20')['map'](e => Number(e));
    var arr = [];
    var i = 0x0;
    for (i = 0x1;; i++) {
        h = search(h);
        if (h[0x0] == 0x0) {
            var b = h[_0x1f57f0(0x1)]((x, i, self) => self[_0x1f57f0(0x2)](x) === i);
            if (b[_0x1f57f0(0x3)] == 0x1) {
                break;
            }
        }
    }
    console[_0x1f57f0(0x4)](i);
}
function a0_0x337e() {
    var _0x502e23 = [
        'split',
        'filter',
        'indexOf',
        'length',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x337e = function () {
        return _0x502e23;
    };
    return a0_0x337e();
}
function a0_0x58d4(skqsmy, key) {
    var stringArray = a0_0x337e();
    a0_0x58d4 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x58d4(skqsmy, key);
}
main(require('fs')['readFileSync'](a0_0x1b2779(0x5), a0_0x1b2779(0x6)));