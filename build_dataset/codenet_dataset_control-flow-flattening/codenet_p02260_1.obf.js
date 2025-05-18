let inputString = '';
process['stdin']['on']('data', inputStdin => {
    inputString += inputStdin;
});
process['stdin']['on']('end', function () {
    const jToHba = {
        'kijde': function (callee, param1) {
            return callee(param1);
        }
    };
    inputString = inputString['replace'](/\s*$/, '')['split']('\x0a')['map'](str => str['replace'](/\s*$/, ''));
    jToHba['kijde'](selectionSort, inputString[0x1]['split']('\x20')['map'](str => Number(str)));
});
const selectionSort = arr => {
    const kaKALs = {
        'nPJtM': function (x, y) {
            return x < y;
        },
        'GBbTq': function (x, y) {
            return x < y;
        }
    };
    let swap = 0x0;
    for (let i = 0x0; kaKALs['nPJtM'](i, arr['length']); i++) {
        let minj = i;
        for (let j = i; kaKALs['GBbTq'](j, arr['length']); j++) {
            if (kaKALs['GBbTq'](arr[j], arr[minj])) {
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
    console['log'](swap);
};