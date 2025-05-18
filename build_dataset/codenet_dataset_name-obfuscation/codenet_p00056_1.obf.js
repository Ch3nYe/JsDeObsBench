function main() {
    var _0x231c26, _0x4178fb, _0x46ba1f, _0x58b8e7, _0x489e8e, _0x480884 = input['length'];
    for (_0x231c26 = 0x0; _0x231c26 < _0x480884; _0x231c26++) {
        _0x46ba1f = parseInt(input[_0x231c26], 0xa);
        if (_0x46ba1f === 0x0)
            break;
        if (_0x46ba1f % 0x2 === 0x1) {
            console['log'](0x0);
            continue;
        }
        _0x58b8e7 = ~~(_0x46ba1f / 0x2);
        for (_0x489e8e = 0x0, _0x4178fb = 0x0; primes[_0x4178fb] <= _0x58b8e7; _0x4178fb++) {
            if (primes['indexOf'](_0x46ba1f - primes[_0x4178fb]) !== -0x1)
                _0x489e8e++;
        }
        console['log'](_0x489e8e);
    }
}
var primes = function (_0x1e7d3b) {
    var _0x53a8ed, _0x623de6, _0x325581, _0x12d771 = [0x2];
    if (_0x1e7d3b < 0x2)
        return [];
    for (_0x53a8ed = 0x3; _0x53a8ed <= _0x1e7d3b; _0x53a8ed += 0x2) {
        _0x325581 = !![];
        for (_0x623de6 = 0x0; _0x12d771[_0x623de6] < _0x53a8ed * _0x53a8ed; _0x623de6++) {
            if (_0x53a8ed % _0x12d771[_0x623de6] == 0x0) {
                _0x325581 = ![];
                break;
            }
        }
        if (_0x325581) {
            _0x12d771['push'](_0x53a8ed);
        }
    }
    return _0x12d771;
}(0xc350);
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x5b64c1) {
    input += _0x5b64c1;
});
process['stdin']['on']('end', function () {
    input = input['split']('\x0a');
    main();
});