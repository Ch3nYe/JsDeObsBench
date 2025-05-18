function a0_0x2fda() {
    const _0x5751e1 = [
        'split',
        'indexOf',
        'slice',
        'push',
        'join',
        'ofkfE',
        'log',
        'length',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2fda = function () {
        return _0x5751e1;
    };
    return a0_0x2fda();
}
function a0_0x3837(FUrmLN, key) {
    const stringArray = a0_0x2fda();
    a0_0x3837 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3837(FUrmLN, key);
}
const a0_0x294f43 = a0_0x3837;
function Main(input) {
    const _0x1c8ff6 = a0_0x3837;
    input = input[_0x1c8ff6(0x0)]('\x0a');
    input1 = input[0x0][_0x1c8ff6(0x0)]('\x20');
    const N = parseInt(input1[0x0]);
    const K = parseInt(input1[0x1]);
    const As = input[0x1]['split']('\x20');
    var filtered = [];
    var results = [''];
    for (i = 0x0; i < K; i++) {
        for (j = 0x0; j < N; j++) {
            if (filtered[_0x1c8ff6(0x1)](As[j]) != -0x1) {
                var id = filtered[_0x1c8ff6(0x1)](As[j]);
                filtered = filtered[_0x1c8ff6(0x2)](0x0, id);
            } else {
                if ('Myyfu' === 'nVarY') {
                    if (filtered[_0x1c8ff6(0x1)](As[j]) != -0x1) {
                        var id = filtered['indexOf'](As[j]);
                        filtered = filtered[_0x1c8ff6(0x2)](0x0, id);
                    } else {
                        filtered[_0x1c8ff6(0x3)](As[j]);
                    }
                } else {
                    filtered[_0x1c8ff6(0x3)](As[j]);
                }
            }
        }
        if (results[_0x1c8ff6(0x1)](filtered[_0x1c8ff6(0x4)]('\x20')) == -0x1) {
            if (_0x1c8ff6(0x5) !== _0x1c8ff6(0x5)) {
                results['push'](filtered[_0x1c8ff6(0x4)]('\x20'));
            } else {
                results[_0x1c8ff6(0x3)](filtered['join']('\x20'));
            }
        } else {
            break;
        }
    }
    const roopstart = results[_0x1c8ff6(0x1)](filtered[_0x1c8ff6(0x4)]('\x20'));
    if (roopstart == K) {
        console[_0x1c8ff6(0x6)](results[roopstart]);
    } else {
        const roopId = (K - roopstart) % (results[_0x1c8ff6(0x7)] - roopstart);
        console[_0x1c8ff6(0x6)](results[roopstart + roopId]);
    }
}
Main(require('fs')[a0_0x294f43(0x8)](a0_0x294f43(0x9), a0_0x294f43(0xa)));