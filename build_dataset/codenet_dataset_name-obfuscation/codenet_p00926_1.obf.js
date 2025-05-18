var n, m;
var x = [];
function main() {
    n = scan();
    m = scan();
    rep(n, function (_0x3f8622) {
        x[_0x3f8622] = 0x0;
    });
    rep(m, function (_0x3c7524) {
        var _0xed823f = scan();
        var _0x41c15f = scan();
        x[_0xed823f] += 0x1;
        x[_0x41c15f] -= 0x1;
    });
    rep(0x1, n, function (_0x4f32e9) {
        x[_0x4f32e9] += x[_0x4f32e9 - 0x1];
    });
    var _0x5cc420 = 0x0;
    rep(n, function (_0x27d838) {
        if (x[_0x27d838] > 0x0) {
            ++_0x5cc420;
        }
    });
    print(_0x5cc420 * 0x2 + n + 0x1);
}
function rep(_0xc443b4, _0xd3d3f5, _0x49b30e) {
    if (_0x49b30e === undefined) {
        _0x49b30e = _0xd3d3f5;
        _0xd3d3f5 = _0xc443b4;
        _0xc443b4 = 0x0;
    }
    for (var _0x21ab1b = _0xc443b4; _0x21ab1b < _0xd3d3f5; ++_0x21ab1b) {
        if (_0x49b30e(_0x21ab1b) === ![]) {
            break;
        }
    }
}
var input = '';
function scan() {
    return +input['pop']();
}
function scan_string() {
    return input['pop']();
}
function print(_0x56377f) {
    console['log'](_0x56377f);
}
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x31ea21) {
    input += _0x31ea21;
});
process['stdin']['on']('end', function () {
    input = input['trim']()['split'](/\s+/)['reverse']();
    main();
});