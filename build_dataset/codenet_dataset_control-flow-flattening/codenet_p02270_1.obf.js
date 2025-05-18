(function main() {
    const WICylA = {
        'XqcOV': function (x, y) {
            return x < y;
        },
        'zLurR': function (x, y) {
            return x <= y;
        },
        'tFMqo': function (callee, param1) {
            return callee(param1);
        },
        'vgvBE': '/dev/stdin',
        'fePON': function (x, y) {
            return x > y;
        },
        'tHxpC': function (x, y) {
            return x / y;
        },
        'fjppg': function (callee, param1) {
            return callee(param1);
        }
    };
    let lines = WICylA['tFMqo'](require, 'fs')['readFileSync'](WICylA['vgvBE'], 'utf8')['trim']()['split']('\x0a');
    let [n, k] = lines['shift']()['split']('\x20')['map'](Number);
    let w = lines['map'](Number);
    const canAllStack = p => {
        let cnt = 0x0, sum = 0x0;
        for (let i = 0x0; WICylA['XqcOV'](i, k); i++) {
            for (sum = 0x0; WICylA['zLurR'](sum + w[cnt], p);) {
                sum += w[cnt++];
                if (cnt === n)
                    return n;
            }
        }
        return cnt;
    };
    let mid, left = 0x0, right = 0x3b9aca00;
    while (WICylA['fePON'](right - left, 0x1)) {
        mid = WICylA['tHxpC'](right + left, 0x2);
        if (WICylA['fjppg'](canAllStack, mid) >= n)
            right = mid;
        else
            left = mid;
    }
    console['log'](Math['floor'](right));
}());