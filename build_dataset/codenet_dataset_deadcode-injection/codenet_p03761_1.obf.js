var a0_0x229aa6 = a0_0x23e5;
function main(input) {
    var _0x2d1f54 = a0_0x23e5;
    var n = input[0x0] - 0x0;
    var lists = [];
    var ansmap = {};
    for (var i = 0x1; i <= n; i++) {
        var str = input[i];
        var map = {};
        for (var j = 0x0; j < str['length']; j++) {
            if ('XCuex' !== _0x2d1f54(0x0)) {
                ansmap[keys[j]] = Math[_0x2d1f54(0x1)](ansmap[keys[j]], list[keys[j]] || 0x0);
            } else {
                map[str[j]] = map[str[j]] ? map[str[j]] + 0x1 : 0x1;
                ansmap[str[j]] = 0x3c;
            }
        }
        lists[_0x2d1f54(0x2)](map);
    }
    var keys = Object[_0x2d1f54(0x3)](ansmap)[_0x2d1f54(0x4)]((a, b) => a > b ? 0x1 : -0x1);
    for (var i = 0x0; i < n; i++) {
        var list = lists[i];
        for (var j = 0x0; j < keys[_0x2d1f54(0x5)]; j++) {
            ansmap[keys[j]] = Math[_0x2d1f54(0x1)](ansmap[keys[j]], list[keys[j]] || 0x0);
        }
    }
    var ans = '';
    keys[_0x2d1f54(0x6)](key => {
        for (var i = 0x0; i < ansmap[key]; i++)
            ans += key;
    });
    console[_0x2d1f54(0x7)](ans);
}
function a0_0x23e5(IOrPAP, key) {
    var stringArray = a0_0x4e28();
    a0_0x23e5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x23e5(IOrPAP, key);
}
function a0_0x4e28() {
    var _0x328407 = [
        'XCuex',
        'min',
        'push',
        'keys',
        'sort',
        'length',
        'forEach',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split'
    ];
    a0_0x4e28 = function () {
        return _0x328407;
    };
    return a0_0x4e28();
}
main(require('fs')[a0_0x229aa6(0x8)](a0_0x229aa6(0x9), a0_0x229aa6(0xa))[a0_0x229aa6(0xb)]()[a0_0x229aa6(0xc)]('\x0a'));