process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var input = '';
process['stdin']['on']('data', function (_0x30fefc) {
    input += _0x30fefc;
});
process['stdin']['on']('end', function () {
    var _0x305d64 = input['split']('\x0a');
    var _0xa2c91e = 0x0;
    while (!![]) {
        var _0x29c911 = Number(_0x305d64[_0xa2c91e++]);
        if (_0x29c911 === 0x0) {
            break;
        }
        for (var _0x187ccd = 0x0; _0x187ccd < _0x29c911; _0x187ccd++) {
            var _0x34438c = _0x305d64[_0xa2c91e++]['split']('\x20')['map'](Number);
            var _0x273b80 = _0x34438c[0x0];
            var _0x21578c = _0x34438c[0x1];
            var _0x41805c = _0x34438c[0x2];
            var _0x2ef32f = 'C';
            if (_0x273b80 === 0x64 || _0x21578c === 0x64 || _0x41805c === 0x64) {
                _0x2ef32f = 'A';
            } else if ((_0x273b80 + _0x21578c) / 0x2 >= 0x5a) {
                _0x2ef32f = 'A';
            } else {
                var _0x4a1093 = (_0x273b80 + _0x21578c + _0x41805c) / 0x3;
                if (_0x4a1093 >= 0x50) {
                    _0x2ef32f = 'A';
                } else if (_0x4a1093 >= 0x46) {
                    _0x2ef32f = 'B';
                } else if (_0x4a1093 >= 0x32 && (_0x273b80 >= 0x50 || _0x21578c >= 0x50)) {
                    _0x2ef32f = 'B';
                }
            }
            console['log'](_0x2ef32f);
        }
    }
});