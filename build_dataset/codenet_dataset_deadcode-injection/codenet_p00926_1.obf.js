var a0_0x52dcf9 = a0_0x1f20;
var n, m;
var x = [];
function main() {
    n = scan();
    m = scan();
    rep(n, function (i) {
        x[i] = 0x0;
    });
    rep(m, function (i) {
        var c = scan();
        var d = scan();
        x[c] += 0x1;
        x[d] -= 0x1;
    });
    rep(0x1, n, function (i) {
        x[i] += x[i - 0x1];
    });
    var c = 0x0;
    rep(n, function (i) {
        var _0x4fefa5 = a0_0x1f20;
        if (_0x4fefa5(0x0) === _0x4fefa5(0x0)) {
            if (x[i] > 0x0) {
                ++c;
            }
        } else {
            return +input[_0x4fefa5(0x1)]();
        }
    });
    print(c * 0x2 + n + 0x1);
}
function a0_0x5822() {
    var _0x35c55c = [
        'YAOqC',
        'pop',
        'log',
        'stdin',
        'setEncoding',
        'utf8',
        'data',
        'end',
        'trim',
        'reverse'
    ];
    a0_0x5822 = function () {
        return _0x35c55c;
    };
    return a0_0x5822();
}
function rep(a, b, c) {
    if (c === undefined) {
        c = b;
        b = a;
        a = 0x0;
    }
    for (var i = a; i < b; ++i) {
        if (c(i) === ![]) {
            break;
        }
    }
}
function a0_0x1f20(rCoJaQ, key) {
    var stringArray = a0_0x5822();
    a0_0x1f20 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1f20(rCoJaQ, key);
}
var input = '';
function scan() {
    var _0x176274 = a0_0x1f20;
    return +input[_0x176274(0x1)]();
}
function scan_string() {
    var _0xedc8e2 = a0_0x1f20;
    return input[_0xedc8e2(0x1)]();
}
function print(val) {
    var _0x11a189 = a0_0x1f20;
    console[_0x11a189(0x2)](val);
}
process[a0_0x52dcf9(0x3)]['resume']();
process[a0_0x52dcf9(0x3)][a0_0x52dcf9(0x4)](a0_0x52dcf9(0x5));
process['stdin']['on'](a0_0x52dcf9(0x6), function (chunk) {
    input += chunk;
});
process[a0_0x52dcf9(0x3)]['on'](a0_0x52dcf9(0x7), function () {
    var _0x3602ab = a0_0x1f20;
    input = input[_0x3602ab(0x8)]()['split'](/\s+/)[_0x3602ab(0x9)]();
    main();
});