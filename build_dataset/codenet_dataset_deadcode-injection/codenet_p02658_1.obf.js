const a0_0x956c8f = a0_0xfa82;
function a0_0xfa82(cFBKEv, key) {
    const stringArray = a0_0x5757();
    a0_0xfa82 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xfa82(cFBKEv, key);
}
function a0_0x5757() {
    const _0x31a1c3 = [
        'split',
        'trim',
        'log',
        'GfMIH',
        'ZCcKq',
        'MmIAx',
        'ytczh',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5757 = function () {
        return _0x31a1c3;
    };
    return a0_0x5757();
}
function Main(input) {
    const _0x4cb048 = a0_0xfa82;
    input = input[_0x4cb048(0x0)]('\x0a');
    const N = input[0x0][_0x4cb048(0x1)]();
    const values = input[0x1]['split']('\x20');
    for (let i = 0x0; i < N; i++) {
        if (values[i] == 0x0) {
            console[_0x4cb048(0x2)]('0');
            return;
        }
    }
    let result = BigInt(0x1);
    for (let i = 0x0; i < N; i++) {
        if (_0x4cb048(0x3) !== 'GfMIH') {
            if (values[i] == 0x0) {
                console['log']('0');
                return;
            }
        } else {
            const nextVal = BigInt(values[i]);
            if (nextVal > BigInt(0xde0b6b3a7640000)) {
                if (_0x4cb048(0x4) !== _0x4cb048(0x5)) {
                    console[_0x4cb048(0x2)]('-1');
                    return;
                } else {
                    const nextVal = BigInt(values[i]);
                    if (nextVal > BigInt(0xde0b6b3a7640000)) {
                        console[_0x4cb048(0x2)]('-1');
                        return;
                    }
                    result = result * nextVal;
                    if (result > BigInt(0xde0b6b3a7640000)) {
                        console[_0x4cb048(0x2)]('-1');
                        return;
                    }
                }
            }
            result = result * nextVal;
            if (result > BigInt(0xde0b6b3a7640000)) {
                if (_0x4cb048(0x6) === 'ytczh') {
                    console['log']('-1');
                    return;
                } else {
                    console[_0x4cb048(0x2)]('0');
                    return;
                }
            }
        }
    }
    console[_0x4cb048(0x2)](Number(result)['toString']());
}
Main(require('fs')[a0_0x956c8f(0x7)](a0_0x956c8f(0x8), a0_0x956c8f(0x9)));