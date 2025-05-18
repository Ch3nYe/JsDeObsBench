function a0_0x3fbe(TTvhLY, key) {
    const stringArray = a0_0x21b9();
    a0_0x3fbe = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3fbe(TTvhLY, key);
}
function a0_0x21b9() {
    const _0x5994e7 = [
        'split',
        'slice',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x21b9 = function () {
        return _0x5994e7;
    };
    return a0_0x21b9();
}
const a0_0x163e5a = a0_0x3fbe;
function main(input) {
    const _0x297b56 = a0_0x3fbe;
    const input_array = input[_0x297b56(0x0)]('\x0a');
    const coins_count = input_array[_0x297b56(0x1)](0x0, 0x3);
    const desired_sum = parseInt(input_array[_0x297b56(0x1)](-0x1), 0xa);
    var answer = 0x0;
    for (i = 0x0; i <= parseInt(coins_count[0x0], 0xa); i++) {
        for (j = 0x0; j <= parseInt(coins_count[0x1], 0xa); j++) {
            for (k = 0x0; k <= parseInt(coins_count[0x2], 0xa); k++) {
                if (0x1f4 * i + 0x64 * j + 0x32 * k == desired_sum) {
                    answer++;
                }
            }
        }
    }
    console[_0x297b56(0x2)](answer);
}
main(require('fs')[a0_0x163e5a(0x3)](a0_0x163e5a(0x4), a0_0x163e5a(0x5)));