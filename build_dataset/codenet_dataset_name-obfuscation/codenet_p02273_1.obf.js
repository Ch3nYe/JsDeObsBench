class Point {
    constructor(_0x1524e3, _0x1f1ae1) {
        this['x'] = _0x1524e3;
        this['y'] = _0x1f1ae1;
    }
    ['print']() {
        console['log'](this['x']['toFixed'](0x8) + '\x20' + this['y']['toFixed'](0x8));
    }
}
(function main() {
    const _0x1658bd = Number(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
    let _0x3a747a = new Point(0x0, 0x0);
    let _0x5a4cb6 = new Point(0x64, 0x0);
    _0x3a747a['print']();
    kock(_0x1658bd, _0x3a747a, _0x5a4cb6);
    _0x5a4cb6['print']();
}());
function kock(_0x1b561b, _0x4e3036, _0x415866) {
    const _0x2fedee = Math['sin'](0x3c * Math['PI'] / 0xb4);
    const _0x432642 = Math['cos'](0x3c * Math['PI'] / 0xb4);
    function _0x3e0507(_0x4cef41, _0x4db9e5, _0x55e65b) {
        if (!_0x4cef41)
            return;
        xDiff = _0x55e65b['x'] - _0x4db9e5['x'];
        yDiff = _0x55e65b['y'] - _0x4db9e5['y'];
        let _0x553970 = new Point(_0x4db9e5['x'] + xDiff / 0x3, _0x4db9e5['y'] + yDiff / 0x3);
        let _0x5c1562 = new Point(_0x553970['x'] + xDiff / 0x3, _0x553970['y'] + yDiff / 0x3);
        let _0x52c061 = new Point((_0x5c1562['x'] - _0x553970['x']) * _0x432642 - (_0x5c1562['y'] - _0x553970['y']) * _0x2fedee + _0x553970['x'], (_0x5c1562['x'] - _0x553970['x']) * _0x2fedee + (_0x5c1562['y'] - _0x553970['y']) * _0x432642 + _0x553970['y']);
        kock(_0x4cef41 - 0x1, _0x4db9e5, _0x553970);
        _0x553970['print']();
        kock(_0x4cef41 - 0x1, _0x553970, _0x52c061);
        _0x52c061['print']();
        kock(_0x4cef41 - 0x1, _0x52c061, _0x5c1562);
        _0x5c1562['print']();
        kock(_0x4cef41 - 0x1, _0x5c1562, _0x55e65b);
    }
    kock = _0x3e0507;
    _0x3e0507(_0x1b561b, _0x4e3036, _0x415866);
}