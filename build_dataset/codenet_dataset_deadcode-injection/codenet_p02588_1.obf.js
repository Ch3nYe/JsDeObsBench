const a0_0x2a4f5f = a0_0x5db2;
function a0_0x5db2(tcTVNO, key) {
    const stringArray = a0_0x4ce6();
    a0_0x5db2 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5db2(tcTVNO, key);
}
function Main(input) {
    const _0x271773 = a0_0x5db2;
    let [l, ...valArr] = input[_0x271773(0x0)]('\x0a');
    valArr = valArr[_0x271773(0x1)](e => parseFloat(e));
    let result = [];
    for (let ele of valArr) {
        let temp = valArr['map'](e => {
            if (e !== ele && e * ele % 0x1 === 0x0 && ele < e) {
                return [
                    ele,
                    e
                ];
            }
        });
        temp = temp['filter'](e => e !== undefined);
        if (temp[_0x271773(0x2)]) {
            result = [
                ...result,
                ...temp
            ];
        }
    }
    console[_0x271773(0x3)](result['length']);
}
function a0_0x4ce6() {
    const _0x45def8 = [
        'split',
        'map',
        'length',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4ce6 = function () {
        return _0x45def8;
    };
    return a0_0x4ce6();
}
Main(require('fs')[a0_0x2a4f5f(0x4)](a0_0x2a4f5f(0x5), a0_0x2a4f5f(0x6)));