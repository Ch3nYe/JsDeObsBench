var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', function (_0x5bc15f) {
    var _0xc7613c, _0x507157, _0x1639bc, _0x27de36, _0x2a6ef;
    var _0x2bd269 = _0x5bc15f['split']('\x20');
    var _0x5652b4 = Number(_0x2bd269[0x0]);
    var _0x4346a5 = Number(_0x2bd269[0x1]);
    var _0x1eaded = Number(_0x2bd269[0x2]);
    _0xc7613c = _0x1eaded / 0xb4 * Math['PI'];
    _0x507157 = Math['sqrt'](_0x5652b4 * _0x5652b4 + _0x4346a5 * _0x4346a5 - 0x2 * _0x5652b4 * _0x4346a5 * Math['cos'](_0xc7613c));
    _0x1639bc = _0x5652b4 * _0x4346a5 * Math['sin'](_0xc7613c) / 0x2;
    _0x27de36 = _0x507157 + _0x5652b4 + _0x4346a5;
    _0x2a6ef = _0x5652b4 * _0x4346a5 * Math['sin'](_0xc7613c) / _0x5652b4;
    console['log'](_0x1639bc['toFixed'](0x8));
    console['log'](_0x27de36['toFixed'](0x8));
    console['log'](_0x2a6ef['toFixed'](0x8));
    process['exit']();
});
process['stdin']['on']('end', function () {
});