process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x73ce55) {
    var _0x399d1a = _0x73ce55['split']('\x20')['map'](Number);
    var _0x55cde8 = _0x399d1a[0x0];
    var _0x483363 = _0x399d1a[0x1];
    var _0x4af634 = _0x399d1a[0x2];
    console['log']('%s', _0x55cde8 < _0x483363 && _0x483363 < _0x4af634 ? 'Yes' : 'No');
});