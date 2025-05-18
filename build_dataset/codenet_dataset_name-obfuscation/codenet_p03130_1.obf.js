'use strict';
function I(_0x53d418, _0x478d07) {
    this['_s'] = _0x53d418;
    this['_c'] = 0x0;
    this['_l'] = 0x0;
    this['_f'] = _0x478d07 || Number;
}
I['prototype']['a'] = function () {
    var _0x3337b3 = this['_s']['split']('\x0a')[this['_l']];
    if (!_0x3337b3)
        return;
    var _0x258653 = _0x3337b3['trim']()['split']('\x20');
    var _0x3e137b = _0x258653[this['_c']];
    this['_c']++;
    if (_0x258653['length'] === this['_c']) {
        this['_c'] = 0x0;
        this['_l']++;
    }
    return this['_f'](_0x3e137b);
};
I['prototype']['l'] = function () {
    var _0xe9786c = this['_s']['split']('\x0a')[this['_l']];
    this['_c'] = 0x0;
    this['_l']++;
    return _0xe9786c['split']('\x20')['map'](this['_f']);
};
function main(_0x5f29ac) {
    const _0x422755 = new I(_0x5f29ac);
    const _0x32f985 = Array(0x4)['fill'](0x0);
    for (let _0x25b355 = 0x0; _0x25b355 < 0x3; _0x25b355++) {
        let _0x13b3b3 = _0x422755['a']();
        let _0x2e50db = _0x422755['a']();
        _0x32f985[_0x13b3b3 - 0x1]++;
        _0x32f985[_0x2e50db - 0x1]++;
    }
    if (_0x32f985['sort']((_0x4fa0d2, _0x36d202) => _0x4fa0d2 - _0x36d202)['join']('\x20') === '1\x201\x202\x202') {
        console['log']('YES');
    } else {
        console['log']('NO');
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));