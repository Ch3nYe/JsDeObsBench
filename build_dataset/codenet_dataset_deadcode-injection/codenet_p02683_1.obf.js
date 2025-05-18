function a0_0x1a57(GMwzQN, key) {
    const stringArray = a0_0x25f9();
    a0_0x1a57 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1a57(GMwzQN, key);
}
function a0_0x25f9() {
    const _0x488876 = [
        'split',
        'keys',
        'length',
        'splice',
        'map',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x25f9 = function () {
        return _0x488876;
    };
    return a0_0x25f9();
}
const a0_0x23f6f5 = a0_0x1a57;
function main(input) {
    const _0x258ac7 = a0_0x1a57;
    const lines = input['trim']()[_0x258ac7(0x0)]('\x0a');
    const [N, M, X] = splitN(lines[0x0]);
    const costs = [];
    const options = [...Array(N)[_0x258ac7(0x1)]()];
    select(options);
    function select(options, cost = 0x0, aList = []) {
        const _0x26dfde = a0_0x1a57;
        for (let i = 0x0; i < options[_0x26dfde(0x2)]; i++) {
            const _options = [...options], [s] = _options[_0x26dfde(0x3)](i, 0x1), [c, ...a] = splitN(lines[s + 0x1]), _cost = cost + c, _aList = a[_0x26dfde(0x4)]((v, i) => v + (aList[i] || 0x0));
            if (_aList['every'](v => v >= X)) {
                costs['push'](_cost);
                continue;
            }
            select(_options, _cost, _aList);
        }
    }
    console[_0x258ac7(0x5)](costs[_0x258ac7(0x2)] ? Math['min'](...costs) : -0x1);
}
main(require('fs')[a0_0x23f6f5(0x6)]('/dev/stdin', a0_0x23f6f5(0x7)));
function splitN(s) {
    const _0x86ad13 = a0_0x1a57;
    return s[_0x86ad13(0x0)]('\x20')['map'](Number);
}