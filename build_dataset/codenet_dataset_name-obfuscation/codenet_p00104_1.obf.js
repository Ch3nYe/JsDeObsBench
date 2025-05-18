process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x47ef04) {
    main(_0x47ef04['trim']());
});
function main(_0x3087f6) {
    var _0x46406e = _0x3087f6['split']('\x0a');
    for (var _0x46fa04 = 0x0; _0x46fa04 < _0x46406e['length'] - 0x1;) {
        var _0x33e89c = Number(_0x46406e[_0x46fa04]['split']('\x20')[0x0]);
        var _0x1c8011 = Number(_0x46406e[_0x46fa04]['split']('\x20')[0x1]);
        var _0x4eaf87 = [];
        _0x46fa04++;
        for (var _0x1578bc = 0x0; _0x1578bc < _0x33e89c; _0x1578bc++) {
            _0x4eaf87[_0x1578bc] = _0x46406e[_0x46fa04]['split']('');
            _0x46fa04++;
        }
        console['log'](calc(_0x4eaf87, 0x0, 0x0));
    }
}
function calc(_0x49e373, _0x13afae, _0x20da5a) {
    if (_0x49e373[_0x13afae][_0x20da5a] == '.') {
        return _0x20da5a + '\x20' + _0x13afae;
    }
    if (_0x49e373[_0x13afae][_0x20da5a] == '1') {
        return 'LOOP';
    }
    switch (_0x49e373[_0x13afae][_0x20da5a]) {
    case '>':
        _0x49e373[_0x13afae][_0x20da5a] = '1';
        return calc(_0x49e373, _0x13afae, _0x20da5a + 0x1);
    case '<':
        _0x49e373[_0x13afae][_0x20da5a] = '1';
        return calc(_0x49e373, _0x13afae, _0x20da5a - 0x1);
    case 'v':
        _0x49e373[_0x13afae][_0x20da5a] = '1';
        return calc(_0x49e373, _0x13afae + 0x1, _0x20da5a);
    case '^':
        _0x49e373[_0x13afae][_0x20da5a] = '1';
        return calc(_0x49e373, _0x13afae - 0x1, _0x20da5a);
    }
}