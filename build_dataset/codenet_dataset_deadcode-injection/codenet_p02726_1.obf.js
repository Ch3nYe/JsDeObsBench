function a0_0x22cb() {
    const _0x4f8f70 = [
        'abs',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x22cb = function () {
        return _0x4f8f70;
    };
    return a0_0x22cb();
}
function a0_0x35ea(BeRTFY, key) {
    const stringArray = a0_0x22cb();
    a0_0x35ea = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x35ea(BeRTFY, key);
}
const a0_0xc7cba0 = a0_0x35ea;
function main(input) {
    function dist(a, b) {
        const _0x22433e = a0_0x35ea;
        return Math['min'](b - a, Math[_0x22433e(0x0)](x - a) + Math['abs'](y - b) + 0x1);
    }
    const inp = input['split']('\x20');
    const n = inp[0x0];
    const x = inp[0x1];
    const y = inp[0x2];
    for (var i = 0x1; i < n; i++) {
        var cnt = 0x0;
        for (var a = 0x1; a < n; a++)
            for (var b = a + 0x1; b <= n; b++)
                if (dist(a, b) == i)
                    cnt++;
        console['log'](cnt);
    }
}
main(require('fs')['readFileSync'](a0_0xc7cba0(0x1), a0_0xc7cba0(0x2)));