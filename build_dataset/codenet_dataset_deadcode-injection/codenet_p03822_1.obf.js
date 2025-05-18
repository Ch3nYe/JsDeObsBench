var a0_0x27a056 = a0_0x56fc;
var tmp = {};
function main(chunk) {
    var _0x1e900d = a0_0x56fc;
    var lines = chunk['split']('\x0a');
    var n = Number(lines[0x0]);
    var map = {};
    for (var i = 0x2; i < n + 0x1; i++) {
        if (_0x1e900d(0x0) !== _0x1e900d(0x0)) {
            var p = map[n]['p'][i];
            if (map[p]) {
                ans = Math[_0x1e900d(0x1)](ans, map[p]['t'] + calc(map, p));
            }
        } else {
            var a = Number(lines[i - 0x1]);
            if (map[a]) {
                map[a]['t']++;
                map[a]['p'][_0x1e900d(0x2)](i);
            } else {
                map[a] = {};
                map[a]['t'] = 0x1;
                map[a]['p'] = [i];
            }
        }
    }
    console[_0x1e900d(0x3)](calc(map, 0x1) + 0x1);
}
function calc(map, n) {
    var _0x2e6286 = a0_0x56fc;
    if (tmp[n]) {
        return tmp[n];
    }
    var ans = 0x0;
    for (var i in map[n]['p']) {
        var p = map[n]['p'][i];
        if (map[p]) {
            if (_0x2e6286(0x4) !== _0x2e6286(0x4)) {
                var a = Number(lines[i - 0x1]);
                if (map[a]) {
                    map[a]['t']++;
                    map[a]['p']['push'](i);
                } else {
                    map[a] = {};
                    map[a]['t'] = 0x1;
                    map[a]['p'] = [i];
                }
            } else {
                ans = Math['max'](ans, map[p]['t'] + calc(map, p));
            }
        }
    }
    tmp[n] = ans;
    return ans;
}
function a0_0x56fc(DPiseP, key) {
    var stringArray = a0_0x20ab();
    a0_0x56fc = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x56fc(DPiseP, key);
}
main(require('fs')['readFileSync'](a0_0x27a056(0x5), a0_0x27a056(0x6)));
function a0_0x20ab() {
    var _0x3a8afb = [
        'nHUmm',
        'max',
        'push',
        'log',
        'hGiZh',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x20ab = function () {
        return _0x3a8afb;
    };
    return a0_0x20ab();
}