const a0_0x4e1151 = a0_0x286d;
function a0_0x286d(poBoxN, key) {
    const stringArray = a0_0x339e();
    a0_0x286d = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x286d(poBoxN, key);
}
function a0_0x339e() {
    const _0x1cd1cb = [
        'trim',
        'log',
        'readFileSync'
    ];
    a0_0x339e = function () {
        return _0x1cd1cb;
    };
    return a0_0x339e();
}
function main(input) {
    const _0x5b883d = a0_0x286d;
    input = input[_0x5b883d(0x0)]();
    let list = input['split']('');
    let answer = 0x0;
    for (let i = 0x0; i < list['length']; i++) {
        if (list[i] === 'R') {
            if (answer === 0x0) {
                answer++;
            } else if (list[i - 0x1] === 'R') {
                answer++;
            }
        }
    }
    console[_0x5b883d(0x1)](answer);
}
main(require('fs')[a0_0x4e1151(0x2)]('/dev/stdin', 'utf8'));