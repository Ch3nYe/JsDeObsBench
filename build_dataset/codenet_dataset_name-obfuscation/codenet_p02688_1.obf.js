function Main(_0x26053d) {
    tmp = _0x26053d['split']('\x0a');
    tmp2 = tmp[0x0]['split']('\x20');
    var _0x4ce10c = parseInt(tmp2[0x0], 0xa);
    var _0x9cfbc3 = parseInt(tmp2[0x1], 0xa);
    tmp['shift']();
    arry = tmp['slice']();
    list = [];
    count = 0x0;
    tmp3 = [];
    for (let _0x47d90c = 0x0; _0x47d90c < arry['length']; _0x47d90c++) {
        if (_0x47d90c % 0x2 !== 0x0) {
            arry[_0x47d90c] = arry[_0x47d90c]['split']('\x20');
            tmp3 = arry[_0x47d90c]['map'](Number);
            for (let _0x57ffd1 = 0x0; _0x57ffd1 < tmp3['length']; _0x57ffd1++) {
                list['push'](tmp3[_0x57ffd1]);
            }
        }
    }
    for (let _0x1c5e11 = 0x1; _0x1c5e11 <= _0x4ce10c; _0x1c5e11++) {
        if (list['indexOf'](_0x1c5e11) >= 0x0) {
        } else {
            count += 0x1;
        }
    }
    console['log'](count);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));