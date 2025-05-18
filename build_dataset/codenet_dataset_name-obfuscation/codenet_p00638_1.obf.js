var n;
var x = [];
function main() {
    while (n = scan()) {
        rep(n, function (_0x2d8158) {
            x[_0x2d8158] = [
                scan(),
                scan()
            ];
        });
        x['sort'](function (_0x4af5aa, _0x1fb5bb) {
            return _0x4af5aa[0x1] - _0x1fb5bb[0x1];
        });
        var _0xffe0b6 = !![];
        var _0x3939fa = 0x0;
        rep(n, function (_0x126c21) {
            _0x3939fa += x[_0x126c21][0x0];
            _0xffe0b6 = _0x3939fa <= x[_0x126c21][0x1] && _0xffe0b6;
        });
        print(_0xffe0b6 ? 'Yes' : 'No');
    }
}
function rep(_0xb49b1c, _0x3cda1b, _0x214588) {
    if (_0x214588 === undefined) {
        _0x214588 = _0x3cda1b;
        _0x3cda1b = _0xb49b1c;
        _0xb49b1c = 0x0;
    }
    for (var _0x3c8180 = _0xb49b1c; _0x3c8180 < _0x3cda1b; ++_0x3c8180) {
        if (_0x214588(_0x3c8180) === ![]) {
            break;
        }
    }
}
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var input = '';
var input_index = 0x0;
function scan(_0xc85832) {
    if (_0xc85832 === 'string') {
        return input[input_index++];
    } else {
        return +input[input_index++];
    }
}
function print(_0x268caa) {
    console['log'](_0x268caa);
}
process['stdin']['on']('data', function (_0x1d9d2c) {
    input += _0x1d9d2c;
});
process['stdin']['on']('end', function () {
    input = input['trim']()['split'](/\s+/);
    main();
});