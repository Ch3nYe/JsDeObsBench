function main(_0x162014) {
    const _0x303a90 = _0x162014['trim']();
    let _0x1e15c1 = _0x303a90['split']('')['reduce']((_0xbd38b4, _0x4e4474) => {
        _0xbd38b4[_0x4e4474['charCodeAt']() - 'a'['charCodeAt']()]++;
        return _0xbd38b4;
    }, [
        0x0,
        0x0,
        0x0
    ]);
    if (Math['max'](..._0x1e15c1) - Math['min'](..._0x1e15c1) >= 0x2) {
        console['log']('NO');
    } else {
        console['log']('YES');
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));