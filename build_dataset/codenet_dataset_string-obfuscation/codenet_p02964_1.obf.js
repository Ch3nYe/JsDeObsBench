function a0_0x15b0(mhqXKk, key) {
    const stringArray = a0_0x159d();
    a0_0x15b0 = function (index, key) {
        index = index - 0x109;
        let value = stringArray[index];
        return value;
    };
    return a0_0x15b0(mhqXKk, key);
}
const a0_0xc7d100 = a0_0x15b0;
(function (stringArrayFunction, comparisonValue) {
    const _0x2135dc = a0_0x15b0;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x2135dc(0x10e)) / 0x1 * (-parseInt(_0x2135dc(0x10d)) / 0x2) + parseInt(_0x2135dc(0x116)) / 0x3 * (parseInt(_0x2135dc(0x11a)) / 0x4) + parseInt(_0x2135dc(0x111)) / 0x5 * (-parseInt(_0x2135dc(0x110)) / 0x6) + parseInt(_0x2135dc(0x119)) / 0x7 + -parseInt(_0x2135dc(0x10c)) / 0x8 + parseInt(_0x2135dc(0x118)) / 0x9 + -parseInt(_0x2135dc(0x10a)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x159d, 0xcc28e));
function Main(input) {
    const _0x3d570b = a0_0x15b0;
    input = input['split']('\x0a');
    input1 = input[0x0]['split']('\x20');
    const N = parseInt(input1[0x0]);
    const K = parseInt(input1[0x1]);
    const As = input[0x1][_0x3d570b(0x115)]('\x20');
    var filtered = [];
    var results = [''];
    for (i = 0x0; i < K; i++) {
        for (j = 0x0; j < N; j++) {
            if (filtered[_0x3d570b(0x112)](As[j]) != -0x1) {
                var id = filtered[_0x3d570b(0x112)](As[j]);
                filtered = filtered['slice'](0x0, id);
            } else {
                filtered[_0x3d570b(0x114)](As[j]);
            }
        }
        if (results['indexOf'](filtered[_0x3d570b(0x113)]('\x20')) == -0x1) {
            results[_0x3d570b(0x114)](filtered[_0x3d570b(0x113)]('\x20'));
        } else {
            break;
        }
    }
    const roopstart = results['indexOf'](filtered[_0x3d570b(0x113)]('\x20'));
    if (roopstart == K) {
        console['log'](results[roopstart]);
    } else {
        const roopId = (K - roopstart) % (results[_0x3d570b(0x10b)] - roopstart);
        console[_0x3d570b(0x10f)](results[roopstart + roopId]);
    }
}
function a0_0x159d() {
    const _0xb01d61 = [
        '2LLTgYh',
        'log',
        '9200652UCiehC',
        '5zuntCZ',
        'indexOf',
        'join',
        'push',
        'split',
        '1544604gTnaVF',
        '/dev/stdin',
        '729585MafIPS',
        '8465604fNQGFn',
        '4MwSUCa',
        'readFileSync',
        '1611770vcHGMo',
        'length',
        '2621888QBudAt',
        '1053288oMpBwu'
    ];
    a0_0x159d = function () {
        return _0xb01d61;
    };
    return a0_0x159d();
}
Main(require('fs')[a0_0xc7d100(0x109)](a0_0xc7d100(0x117), 'utf8'));