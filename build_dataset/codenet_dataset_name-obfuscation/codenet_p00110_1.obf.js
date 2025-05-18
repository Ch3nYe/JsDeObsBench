function main() {
    input['forEach'](function (_0x3532fd) {
        var _0x58e798, _0x3b4b00, _0x521fd6, _0x412184, _0x133bde, _0x51ef09, _0x32a89b, _0x56cc61;
        if (_0x3532fd['trim']() === '')
            return;
        _0x412184 = _0x3532fd['match'](/([0-9X]+)\+([0-9X]+)\=([0-9X]+)/);
        _0x58e798 = _0x412184[0x1];
        _0x3b4b00 = _0x412184[0x2];
        _0x521fd6 = _0x412184[0x3];
        for (_0x56cc61 = 0x0; _0x56cc61 <= 0x9; _0x56cc61++) {
            if (_0x56cc61 === 0x0 && (_0x58e798['charAt'](0x0) === 'X' || _0x3b4b00['charAt'](0x0) === 'X' || _0x521fd6['charAt'](0x0) === 'X'))
                continue;
            _0x133bde = parseInt(_0x58e798['replace'](/X/g, _0x56cc61), 0xa);
            _0x51ef09 = parseInt(_0x3b4b00['replace'](/X/g, _0x56cc61), 0xa);
            _0x32a89b = parseInt(_0x521fd6['replace'](/X/g, _0x56cc61), 0xa);
            if (_0x133bde + _0x51ef09 === _0x32a89b)
                break;
        }
        console['log'](_0x56cc61 === 0xa ? 'NA' : _0x56cc61);
    });
}
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x229f89) {
    input += _0x229f89;
});
process['stdin']['on']('end', function () {
    input = input['split']('\x0a');
    main();
});