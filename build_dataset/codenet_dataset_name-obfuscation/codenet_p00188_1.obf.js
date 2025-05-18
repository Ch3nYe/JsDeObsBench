function binarySearch(_0x1f1cfc, _0x30b36c) {
    var _0xb00454 = 0x0;
    var _0x1f4428 = _0x1f1cfc['length'] - 0x1;
    var _0x32f3c6 = 0x0;
    while (!![]) {
        _0x32f3c6++;
        if (_0xb00454 == _0x1f4428)
            break;
        var _0xeec564 = Math['floor']((_0xb00454 + _0x1f4428) / 0x2);
        if (_0x1f1cfc[_0xeec564] == _0x30b36c)
            return _0x32f3c6;
        if (_0x30b36c < _0x1f1cfc[_0xeec564])
            _0x1f4428 = _0xeec564;
        else
            _0xb00454 = _0xeec564 + 0x1;
    }
    return _0x32f3c6;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i < n; i++)
        arr['push'](Arr['shift']() - 0x0);
    console['log'](binarySearch(arr, Arr['shift']() - 0x0));
}