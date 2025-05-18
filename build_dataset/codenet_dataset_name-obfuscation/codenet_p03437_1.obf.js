function Main(_0x267dc1) {
    _0x267dc1 = _0x267dc1['split']('\x20');
    ans = _0x267dc1[0x0] / _0x267dc1[0x1];
    num = 0x0;
    var _0x4b0aaf = Number['isInteger'](ans);
    if (_0x4b0aaf === !![]) {
        ans = -0x1;
    } else {
        while (!![]) {
            num++;
            cal = _0x267dc1[0x0] * num / _0x267dc1[0x1];
            var _0x4779d9 = Number['isInteger'](cal);
            if (_0x4779d9 === !![]) {
                ans = _0x267dc1[0x0] * (num - 0x1);
                break;
            }
            if (_0x267dc1[0x0] > Math['pow'](0xa, 0x9) | _0x267dc1[0x1] > Math['pow'](0xa, 0x9) | _0x267dc1[0x0] * (num - 0x1) > Math['pow'](0xa, 0x12)) {
                ans = -0x1;
                break;
            }
        }
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));