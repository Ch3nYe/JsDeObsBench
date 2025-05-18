function a0_0x34ed() {
    const _0x36a44d = [
        'trim',
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x34ed = function () {
        return _0x36a44d;
    };
    return a0_0x34ed();
}
const a0_0x4bed42 = a0_0x308a;
function Main(input) {
    const _0x197e3a = a0_0x308a;
    const setting = input[_0x197e3a(0x0)]()[_0x197e3a(0x1)]('\x0a');
    const process_sum = setting[0x0] - 0x0;
    const up = setting[0x1]['split']('\x20');
    const down = setting[0x2]['split']('\x20');
    let answer = 0x0;
    for (let process_up = 0x0; process_up < process_sum; process_up++) {
        let process_down = process_sum - process_up - 0x1;
        let candies = 0x0;
        for (let i = 0x0; i <= process_up; i++) {
            candies += parseInt(up[i]);
        }
        for (let i = 0x0; i <= process_down; i++) {
            candies += parseInt(down[process_up + i]);
        }
        if (answer < candies) {
            answer = candies;
        }
    }
    console[_0x197e3a(0x2)](answer);
}
function a0_0x308a(vberkN, key) {
    const stringArray = a0_0x34ed();
    a0_0x308a = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x308a(vberkN, key);
}
Main(require('fs')[a0_0x4bed42(0x3)](a0_0x4bed42(0x4), a0_0x4bed42(0x5)));