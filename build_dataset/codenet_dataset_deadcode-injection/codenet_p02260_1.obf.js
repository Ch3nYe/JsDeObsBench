const a0_0x1730cb = a0_0x3313;
let inputString = '';
function a0_0x3313(fOWmMb, key) {
    const stringArray = a0_0x106c();
    a0_0x3313 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3313(fOWmMb, key);
}
process[a0_0x1730cb(0x0)]['on'](a0_0x1730cb(0x1), inputStdin => {
    inputString += inputStdin;
});
function a0_0x106c() {
    const _0x2d7e30 = [
        'stdin',
        'data',
        'end',
        'split',
        'replace',
        'map',
        'length',
        'lENJY',
        'thENZ',
        'cDFPy',
        'npSED',
        'log',
        'join'
    ];
    a0_0x106c = function () {
        return _0x2d7e30;
    };
    return a0_0x106c();
}
process['stdin']['on'](a0_0x1730cb(0x2), function () {
    const _0x547bc4 = a0_0x3313;
    inputString = inputString['replace'](/\s*$/, '')[_0x547bc4(0x3)]('\x0a')['map'](str => str[_0x547bc4(0x4)](/\s*$/, ''));
    selectionSort(inputString[0x1][_0x547bc4(0x3)]('\x20')[_0x547bc4(0x5)](str => Number(str)));
});
const selectionSort = arr => {
    const _0x364a3d = a0_0x3313;
    let swap = 0x0;
    for (let i = 0x0; i < arr[_0x364a3d(0x6)]; i++) {
        let minj = i;
        for (let j = i; j < arr[_0x364a3d(0x6)]; j++) {
            if (_0x364a3d(0x7) === _0x364a3d(0x8)) {
                arr[minj] = a;
                arr[i] = b;
                swap++;
            } else {
                if (arr[j] < arr[minj]) {
                    minj = j;
                }
            }
        }
        const a = arr[i];
        const b = arr[minj];
        if (a !== b) {
            if (_0x364a3d(0x9) !== _0x364a3d(0xa)) {
                arr[minj] = a;
                arr[i] = b;
                swap++;
            } else {
                minj = j;
            }
        }
    }
    console[_0x364a3d(0xb)](arr[_0x364a3d(0xc)]('\x20'));
    console[_0x364a3d(0xb)](swap);
};