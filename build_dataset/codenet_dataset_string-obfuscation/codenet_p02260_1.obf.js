const a0_0x5d3830 = a0_0x457e;
(function (stringArrayFunction, comparisonValue) {
    const _0x5dcd40 = a0_0x457e;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x5dcd40(0x93)) / 0x1 * (parseInt(_0x5dcd40(0x94)) / 0x2) + parseInt(_0x5dcd40(0x9b)) / 0x3 * (parseInt(_0x5dcd40(0x99)) / 0x4) + parseInt(_0x5dcd40(0x98)) / 0x5 * (-parseInt(_0x5dcd40(0x9e)) / 0x6) + -parseInt(_0x5dcd40(0x9a)) / 0x7 * (-parseInt(_0x5dcd40(0x96)) / 0x8) + parseInt(_0x5dcd40(0x91)) / 0x9 * (-parseInt(_0x5dcd40(0x8e)) / 0xa) + parseInt(_0x5dcd40(0x8c)) / 0xb + -parseInt(_0x5dcd40(0x9c)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3024, 0xea98c));
let inputString = '';
function a0_0x3024() {
    const _0xc61127 = [
        '3478383xUwIVG',
        'data',
        '92867LzMejk',
        '14AQSDdQ',
        'map',
        '392kXLeBd',
        'length',
        '57515blnsCY',
        '312020OYGuvT',
        '188041dycSXf',
        '48nHvliT',
        '23634684wvInqc',
        'split',
        '114lwjCMe',
        '16285874eEdLkq',
        'stdin',
        '40NEpebl',
        'end',
        'log'
    ];
    a0_0x3024 = function () {
        return _0xc61127;
    };
    return a0_0x3024();
}
function a0_0x457e(gJmhjk, key) {
    const stringArray = a0_0x3024();
    a0_0x457e = function (index, key) {
        index = index - 0x8c;
        let value = stringArray[index];
        return value;
    };
    return a0_0x457e(gJmhjk, key);
}
process[a0_0x5d3830(0x8d)]['on'](a0_0x5d3830(0x92), inputStdin => {
    inputString += inputStdin;
});
process['stdin']['on'](a0_0x5d3830(0x8f), function () {
    const _0x247e89 = a0_0x5d3830;
    inputString = inputString['replace'](/\s*$/, '')[_0x247e89(0x9d)]('\x0a')['map'](str => str['replace'](/\s*$/, ''));
    selectionSort(inputString[0x1][_0x247e89(0x9d)]('\x20')[_0x247e89(0x95)](str => Number(str)));
});
const selectionSort = arr => {
    const _0x4bba98 = a0_0x5d3830;
    let swap = 0x0;
    for (let i = 0x0; i < arr[_0x4bba98(0x97)]; i++) {
        let minj = i;
        for (let j = i; j < arr['length']; j++) {
            if (arr[j] < arr[minj]) {
                minj = j;
            }
        }
        const a = arr[i];
        const b = arr[minj];
        if (a !== b) {
            arr[minj] = a;
            arr[i] = b;
            swap++;
        }
    }
    console['log'](arr['join']('\x20'));
    console[_0x4bba98(0x90)](swap);
};