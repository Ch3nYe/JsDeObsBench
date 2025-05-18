process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x1c1080) {
    before(_0x1c1080);
});
var log = console['log'];
function before(_0x519c39) {
    var _0x192c46 = _0x519c39['split']('\x0a');
    _0x192c46 = _0x192c46['filter'](function (_0x1e10d3) {
        return _0x1e10d3 !== '';
    });
    main(_0x192c46);
}
function main(_0x5c4a9c) {
    var _0x27308f = _0x5c4a9c['map'](function (_0x145694) {
        return Number(_0x145694);
    });
    while (_0x27308f['length'] > 0x1) {
        var _0x5ccaea = _0x27308f['shift']();
        var _0x194481 = _0x27308f['slice'](0x0, _0x5ccaea);
        _0x27308f = _0x27308f['slice'](_0x5ccaea);
        var _0x3c53a5 = _0x194481['indexOf'](Math['min']['apply'](this, _0x194481));
        _0x194481['splice'](_0x3c53a5, 0x1);
        var _0x540a33 = _0x194481['indexOf'](Math['max']['apply'](this, _0x194481));
        _0x194481['splice'](_0x540a33, 0x1);
        var _0x35e58d = _0x194481['reduce'](function (_0x171463, _0x5dca34, _0x173079, _0x4ed93b) {
            return _0x171463 + _0x5dca34;
        });
        log(Math['round'](_0x35e58d / _0x194481['length']));
    }
}