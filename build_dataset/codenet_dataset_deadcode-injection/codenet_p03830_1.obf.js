var a0_0x5c857c = a0_0xd767;
function a0_0xd767(WBBpxL, key) {
    var stringArray = a0_0x1c82();
    a0_0xd767 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xd767(WBBpxL, key);
}
function main(input) {
    var _0x147469 = a0_0xd767;
    var n = parseInt(input);
    var map = {};
    for (var i = 0x2; i <= n; i++) {
        var t = i;
        for (var j = 0x2; j * j <= t; j++) {
            if (t % j == 0x0) {
                if ('eUeHf' === _0x147469(0x0)) {
                    var cnt = 0x0;
                    while (t % j == 0x0) {
                        cnt++;
                        t /= j;
                    }
                    if (map[j]) {
                        if (_0x147469(0x1) === _0x147469(0x2)) {
                            map[j] = map[j] + cnt;
                        } else {
                            map[j] = map[j] + cnt;
                        }
                    } else {
                        map[j] = cnt;
                    }
                } else {
                    if (map[t]) {
                        map[t]++;
                    } else {
                        map[t] = 0x1;
                    }
                }
            }
        }
        if (t != 0x1) {
            if (_0x147469(0x3) !== 'boZJG') {
                if (map[t]) {
                    if (_0x147469(0x4) !== _0x147469(0x4)) {
                        map[t] = 0x1;
                    } else {
                        map[t]++;
                    }
                } else {
                    if (_0x147469(0x5) === _0x147469(0x6)) {
                        cnt++;
                        t /= j;
                    } else {
                        map[t] = 0x1;
                    }
                }
            } else {
                map[j] = cnt;
            }
        }
    }
    var ans = 0x1;
    var mod = 0x3b9aca07;
    for (var x in map) {
        ans = ans * (map[x] + 0x1) % mod;
    }
    console[_0x147469(0x7)](ans);
}
function a0_0x1c82() {
    var _0x1001af = [
        'eUeHf',
        'cUESq',
        'VFTVY',
        'eVCVH',
        'HGOZS',
        'KQHba',
        'ygEnV',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x1c82 = function () {
        return _0x1001af;
    };
    return a0_0x1c82();
}
main(require('fs')[a0_0x5c857c(0x8)](a0_0x5c857c(0x9), 'utf8'));