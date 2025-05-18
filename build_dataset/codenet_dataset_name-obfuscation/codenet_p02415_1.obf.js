(function (_0x507b6e) {
    console['log'](_0x507b6e['replace'](/\n$/, '')['split']('')['map'](function (_0xb84cc5) {
        if (_0xb84cc5['match'](/[a-z]/)) {
            return _0xb84cc5['toUpperCase']();
        } else if (_0xb84cc5['match'](/[A-Z]/)) {
            return _0xb84cc5['toLowerCase']();
        }
        return _0xb84cc5;
    })['join'](''));
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));