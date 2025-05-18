'use strict';
function Main(_0x4b1712) {
    _0x4b1712 = _0x4b1712['trim']()['split'](/\s+/)['map'](_0x22c39d => _0x22c39d - 0x0);
    var _0x5c0647 = _0x4b1712['shift'](), _0x43f8e0 = _0x4b1712['shift']();
    var _0x1eadd6 = _0x4b1712['splice'](0x0, _0x5c0647);
    var _0x55cc37 = [];
    for (let _0x2cf455 = 0x0; _0x2cf455 < _0x5c0647; _0x2cf455++)
        _0x55cc37[_0x2cf455] = new Node(_0x2cf455);
    for (let _0x5831d6 = 0x0; _0x5831d6 < _0x43f8e0; _0x5831d6++)
        _0x55cc37[_0x4b1712[0x2 * _0x5831d6] - 0x1]['merge'](_0x55cc37[_0x4b1712[0x2 * _0x5831d6 + 0x1] - 0x1]);
    var _0x101159 = 0x0;
    for (let _0x4b3f41 = 0x0; _0x4b3f41 < _0x5c0647; _0x4b3f41++)
        if (_0x55cc37[_0x4b3f41]['top']() === _0x55cc37[_0x1eadd6[_0x4b3f41] - 0x1]['top']())
            _0x101159++;
    console['log'](_0x101159);
}
function Node(_0x32cb4c) {
    var _0x4752fb = this;
    _0x4752fb['value'] = _0x32cb4c;
    _0x4752fb['parent'] = null;
    _0x4752fb['weight'] = 0x1;
}
Node['prototype']['top'] = function () {
    var _0x3d3b23 = this;
    var _0x5a845d = _0x3d3b23['parent'];
    if (!_0x5a845d)
        return _0x3d3b23;
    else
        return _0x5a845d['top']();
};
Node['prototype']['adopt'] = function (_0x3da467) {
    var _0x1cfc90 = this['top']();
    var _0x5efc9e = _0x3da467['top']();
    _0x5efc9e['parent'] = _0x1cfc90;
    _0x1cfc90['weight'] += _0x5efc9e['weight'];
};
Node['prototype']['merge'] = function (_0x2ceefa) {
    var _0x1b54f2 = this['top']();
    _0x2ceefa = _0x2ceefa['top']();
    if (_0x1b54f2 === _0x2ceefa)
        return;
    if (_0x1b54f2['weight'] < _0x2ceefa['weight'])
        _0x2ceefa['adopt'](_0x1b54f2);
    else
        _0x1b54f2['adopt'](_0x2ceefa);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));