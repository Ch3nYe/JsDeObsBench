function main(_0x1579fa) {
    var _0x4a81ab = _0x1579fa['toString']()['split']('');
    var _0x1d4096 = 0x0;
    for (var _0x3eec86 = 0x0; _0x3eec86 < _0x4a81ab['length']; _0x3eec86++) {
        _0x1d4096 += parseInt(_0x4a81ab[_0x3eec86]);
    }
    if (parseInt(_0x1579fa) % _0x1d4096 == 0x0) {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));