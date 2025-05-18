function Main(_0x5ba877) {
    _0x5ba877 = _0x5ba877['trim']();
    var _0x40bc9e = 0x0, _0x244162 = 0x0, _0x36671f = 0x0;
    var _0x50fef6 = 'YES';
    for (var _0x574584 = 0x0; _0x574584 < _0x5ba877['length']; _0x574584++) {
        if (_0x5ba877[_0x574584] === 'a')
            _0x40bc9e++;
        else if (_0x5ba877[_0x574584] === 'b')
            _0x244162++;
        else
            _0x36671f++;
    }
    if (Math['max'](_0x40bc9e, _0x244162, _0x36671f) - Math['min'](_0x40bc9e, _0x244162, _0x36671f) > 0x1)
        _0x50fef6 = 'NO';
    console['log'](_0x50fef6);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));