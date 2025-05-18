function main() {
    while (0x1) {
        var _0x2e104f = scan();
        if (_0x2e104f == 0x0) {
            break;
        }
        var _0x2ec534 = Array(_0x2e104f);
        rep(_0x2e104f, function (_0x5eeb7a) {
            _0x2ec534[_0x5eeb7a] = scan();
        });
        _0x2ec534[-0x1] = 0x0;
        rep(_0x2e104f, function (_0x1d914d) {
            _0x2ec534[_0x1d914d] += _0x2ec534[_0x1d914d - 0x1];
        });
        var _0x2b422a = -Infinity;
        rep(_0x2e104f, function (_0x339a77) {
            for (var _0x21d499 = _0x339a77; _0x21d499 < _0x2e104f; ++_0x21d499) {
                _0x2b422a = Math['max'](_0x2ec534[_0x21d499] - _0x2ec534[_0x339a77 - 0x1], _0x2b422a);
            }
        });
        print(_0x2b422a);
    }
}
function rep(_0x358db2, _0x1be163) {
    for (var _0x268991 = 0x0; _0x268991 < _0x358db2; ++_0x268991) {
        _0x1be163(_0x268991);
    }
}
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var input = '';
var input_index = 0x0;
function scan(_0x361c08) {
    if (_0x361c08 === 'string') {
        return input[input_index++];
    } else {
        return +input[input_index++];
    }
}
function print(_0x2319f9) {
    console['log'](_0x2319f9);
}
process['stdin']['on']('data', function (_0x3cc736) {
    input += _0x3cc736;
});
process['stdin']['on']('end', function () {
    input = input['split'](/\s+/);
    main();
});