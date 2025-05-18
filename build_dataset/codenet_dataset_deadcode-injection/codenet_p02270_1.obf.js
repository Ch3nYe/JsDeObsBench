function a0_0x22e0() {
    const _0x16e5e6 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'log',
        'floor'
    ];
    a0_0x22e0 = function () {
        return _0x16e5e6;
    };
    return a0_0x22e0();
}
function a0_0xb7e6(ekeZCg, key) {
    const stringArray = a0_0x22e0();
    a0_0xb7e6 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xb7e6(ekeZCg, key);
}
(function main() {
    const _0x5f36bd = a0_0xb7e6;
    let lines = require('fs')[_0x5f36bd(0x0)](_0x5f36bd(0x1), _0x5f36bd(0x2))[_0x5f36bd(0x3)]()[_0x5f36bd(0x4)]('\x0a');
    let [n, k] = lines[_0x5f36bd(0x5)]()[_0x5f36bd(0x4)]('\x20')[_0x5f36bd(0x6)](Number);
    let w = lines[_0x5f36bd(0x6)](Number);
    const canAllStack = p => {
        let cnt = 0x0, sum = 0x0;
        for (let i = 0x0; i < k; i++) {
            for (sum = 0x0; sum + w[cnt] <= p;) {
                sum += w[cnt++];
                if (cnt === n)
                    return n;
            }
        }
        return cnt;
    };
    let mid, left = 0x0, right = 0x3b9aca00;
    while (right - left > 0x1) {
        mid = (right + left) / 0x2;
        if (canAllStack(mid) >= n)
            right = mid;
        else
            left = mid;
    }
    console[_0x5f36bd(0x7)](Math[_0x5f36bd(0x8)](right));
}());