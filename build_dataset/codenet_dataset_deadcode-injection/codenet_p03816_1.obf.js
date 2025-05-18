'use strict';
function a0_0x1bc8() {
    const _0x3ced4a = [
        'aqRcR',
        'keys',
        'reduce',
        'aTbfE',
        'LSftk',
        'ClUEa',
        'stdin',
        'resume',
        'setEncoding',
        'utf8',
        'end',
        'trim',
        'split',
        'map',
        'length',
        'sOtyw',
        'log',
        'data',
        'JuKUs',
        'KUyQM',
        'TIFzy'
    ];
    a0_0x1bc8 = function () {
        return _0x3ced4a;
    };
    return a0_0x1bc8();
}
function a0_0x57c1(VTkawm, key) {
    const stringArray = a0_0x1bc8();
    a0_0x57c1 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x57c1(VTkawm, key);
}
function main(n, array) {
    const _0x24e233 = a0_0x57c1;
    let counter = {};
    for (let a of array) {
        if ('aqRcR' !== _0x24e233(0x0)) {
            input += chunk;
        } else {
            counter[a] = counter[a] || 0x0;
            counter[a]++;
        }
    }
    let nums = Object[_0x24e233(0x1)](counter);
    let evenCount = nums[_0x24e233(0x2)]((count, num) => {
        const _0x5a06f9 = a0_0x57c1;
        if (_0x5a06f9(0x3) !== _0x5a06f9(0x4)) {
            if (counter[num] % 0x2 === 0x0) {
                if (_0x5a06f9(0x5) !== _0x5a06f9(0x5)) {
                    let input = '';
                    process[_0x5a06f9(0x6)][_0x5a06f9(0x7)]();
                    process[_0x5a06f9(0x6)][_0x5a06f9(0x8)](_0x5a06f9(0x9));
                    process[_0x5a06f9(0x6)]['on']('data', chunk => {
                        input += chunk;
                    });
                    process[_0x5a06f9(0x6)]['on'](_0x5a06f9(0xa), () => {
                        const _0xaceaff = a0_0x57c1;
                        input = input[_0xaceaff(0xb)]()[_0xaceaff(0xc)]('\x0a');
                        let n = Number(input[0x0]);
                        let array = input[0x1][_0xaceaff(0xc)]('\x20')[_0xaceaff(0xd)](a => Number(a));
                        main(n, array);
                    });
                } else {
                    return count + 0x1;
                }
            } else {
                return count;
            }
        } else {
            return count + 0x1;
        }
    }, 0x0);
    let answer;
    if (evenCount % 0x2 === 0x0) {
        answer = nums[_0x24e233(0xe)];
    } else {
        if (_0x24e233(0xf) === _0x24e233(0xf)) {
            answer = nums['length'] - 0x1;
        } else {
            input = input[_0x24e233(0xb)]()['split']('\x0a');
            let n = Number(input[0x0]);
            let array = input[0x1][_0x24e233(0xc)]('\x20')['map'](a => Number(a));
            main(n, array);
        }
    }
    console[_0x24e233(0x10)](answer);
}
function doMain() {
    const _0x55602e = a0_0x57c1;
    let input = '';
    process[_0x55602e(0x6)]['resume']();
    process['stdin'][_0x55602e(0x8)](_0x55602e(0x9));
    process[_0x55602e(0x6)]['on'](_0x55602e(0x11), chunk => {
        const _0x1f5fec = a0_0x57c1;
        if ('JuKUs' !== _0x1f5fec(0x12)) {
            answer = nums[_0x1f5fec(0xe)];
        } else {
            input += chunk;
        }
    });
    process[_0x55602e(0x6)]['on']('end', () => {
        const _0x45fa0a = a0_0x57c1;
        if (_0x45fa0a(0x13) === _0x45fa0a(0x14)) {
            return count;
        } else {
            input = input[_0x45fa0a(0xb)]()[_0x45fa0a(0xc)]('\x0a');
            let n = Number(input[0x0]);
            let array = input[0x1]['split']('\x20')[_0x45fa0a(0xd)](a => Number(a));
            main(n, array);
        }
    });
}
doMain();