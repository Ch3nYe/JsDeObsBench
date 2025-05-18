function main(_0x3cd1a5) {
    var _0x4bc6bd = parseInt(_0x3cd1a5[0x0]);
    var _0x51a13d = ![];
    for (var _0x4fd698 = 0x1; _0x4fd698 < _0x3cd1a5['length']; _0x4fd698++) {
        var _0x245ad1 = parseInt(_0x3cd1a5[_0x4fd698]);
        if (_0x245ad1 % 0x2 === 0x1)
            _0x51a13d = !![];
        ;
    }
    console['log'](_0x51a13d ? 'first' : 'second');
}
function parse(_0x3c0998) {
    var _0x5ab163 = [];
    var _0x104ba6 = _0x3c0998['split']('\x20');
    for (var _0x4caa73 = 0x0; _0x4caa73 < _0x104ba6['length']; _0x4caa73++) {
        _0x5ab163['push'](parseInt(_0x104ba6[_0x4caa73]));
    }
    return _0x5ab163;
}
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x2d9094) {
    input += _0x2d9094;
});
process['stdin']['on']('end', function () {
    input = input['split']('\x0a');
    main(input);
});