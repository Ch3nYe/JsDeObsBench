function main() {
    var _0x547821 = getInput();
    var _0x12800b = _0x547821['split']('\x0a');
    var _0x3dbda3 = parseInt(_0x12800b[0x0]);
    var _0x47adb6 = _0x12800b['slice'](0x1, _0x3dbda3 + 0x1)['map'](function (_0x3c2106) {
        return parseInt(_0x3c2106);
    });
    console['log'](lis(_0x47adb6));
}
function lis(_0x3fbd99) {
    var _0x2b9575 = [_0x3fbd99[0x0]];
    for (var _0x5d491d = 0x1; _0x5d491d < _0x3fbd99['length']; _0x5d491d++) {
        var _0x323b4f = _0x3fbd99[_0x5d491d];
        _0x2b9575[search(_0x2b9575, _0x323b4f) + 0x1] = _0x323b4f;
    }
    return _0x2b9575['length'];
}
function search(_0x524606, _0x4c1304) {
    var _0x50bcb2 = 0x0, _0x22e37c = _0x524606['length'];
    if (_0x524606['length'] == 0x0 || _0x4c1304 <= _0x524606[0x0]) {
        return -0x1;
    }
    while (_0x50bcb2 + 0x1 < _0x22e37c) {
        var _0x85f145 = (_0x50bcb2 + _0x22e37c + 0x1) / 0x2;
        if (_0x524606[_0x85f145] < _0x4c1304) {
            _0x50bcb2 = _0x85f145;
        } else {
            _0x22e37c = _0x85f145;
        }
    }
    return _0x50bcb2;
}
nodeJS = typeof require != 'undefined';
function getInput() {
    if (!nodeJS) {
        return document['getElementById']('input')['value'];
    }
    return require('fs')['readFileSync']('/dev/stdin')['toString']();
}
if (nodeJS) {
    main();
}