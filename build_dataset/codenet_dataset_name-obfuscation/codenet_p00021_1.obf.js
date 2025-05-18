(function (_0x4cb0fd) {
    var _0x1c75ea = _0x4cb0fd['replace'](/\n$/, '')['split']('\x0a');
    var _0x33e6e6 = Number(_0x1c75ea['shift']());
    var _0x471ed5 = 0x0;
    while (_0x471ed5++ < _0x33e6e6) {
        var _0x47cabe = _0x1c75ea['shift']()['split']('\x20')['map'](Number);
        var _0x5d117e = _0x47cabe['shift']();
        var _0x2215da = _0x47cabe['shift']();
        var _0x393694 = _0x47cabe['shift']();
        var _0x49a73e = _0x47cabe['shift']();
        var _0x3c2edd = _0x47cabe['shift']();
        var _0x16a16e = _0x47cabe['shift']();
        var _0x5bd434 = _0x47cabe['shift']();
        var _0x3abb7d = _0x47cabe['shift']();
        console['log'](((_0x49a73e - _0x2215da) / (_0x393694 - _0x5d117e))['toFixed'](0x5) === ((_0x3abb7d - _0x16a16e) / (_0x5bd434 - _0x3c2edd))['toFixed'](0x5) ? 'YES' : 'NO');
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));