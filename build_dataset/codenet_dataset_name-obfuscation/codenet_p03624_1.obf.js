function main(_0x48017a) {
    const _0x335d3d = _0x48017a['split']('');
    alphabetList = 'abcdefghijklmnopqrstuvwxyz'['split']('');
    arr = _0x335d3d['filter'](function (_0x1cf2eb, _0xe34bbd, _0x4c04b5) {
        return _0x4c04b5['indexOf'](_0x1cf2eb) === _0xe34bbd;
    })['sort']();
    tmp = _0x18aa50(arr, alphabetList);
    function _0x18aa50(_0xe0ba8d, _0x5bb7e1) {
        var _0x31eeb2 = [];
        var _0x4b58c2 = [];
        for (var _0x7b03cd = 0x0; _0x7b03cd < _0xe0ba8d['length']; _0x7b03cd++) {
            _0x31eeb2[_0xe0ba8d[_0x7b03cd]] = !![];
        }
        for (var _0x7b03cd = 0x0; _0x7b03cd < _0x5bb7e1['length']; _0x7b03cd++) {
            if (_0x31eeb2[_0x5bb7e1[_0x7b03cd]]) {
                delete _0x31eeb2[_0x5bb7e1[_0x7b03cd]];
            } else {
                _0x31eeb2[_0x5bb7e1[_0x7b03cd]] = !![];
            }
        }
        for (var _0x225f45 in _0x31eeb2) {
            _0x4b58c2['push'](_0x225f45);
        }
        return _0x4b58c2;
    }
    if (tmp['length'] > 0x0) {
        ans = tmp[0x0];
    } else {
        ans = 'None';
    }
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));