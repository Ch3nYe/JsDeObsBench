const a0_0x4d3926 = a0_0x5cb0;
function a0_0x5cb0(qVtSRs, key) {
    const stringArray = a0_0x469d();
    a0_0x5cb0 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5cb0(qVtSRs, key);
}
function main(input) {
    const _0x1ead4a = a0_0x5cb0;
    const lines = input['trim']()[_0x1ead4a(0x0)]('\x0a');
    let [n, k] = lines[0x0][_0x1ead4a(0x0)]('\x20');
    n = +n;
    k = BigInt(k);
    const towns = lines[0x1][_0x1ead4a(0x0)]('\x20')[_0x1ead4a(0x1)](Number);
    const visited = new Map();
    let pos = 0x1;
    while (k > 0x0) {
        const i = visited[_0x1ead4a(0x2)](pos);
        if (!i) {
            visited[_0x1ead4a(0x3)](pos, BigInt(visited[_0x1ead4a(0x4)]));
            pos = towns[pos - 0x1];
            k--;
        } else {
            const cycle = BigInt(visited[_0x1ead4a(0x4)]) - i;
            const rest = k % cycle;
            for (let [key, value] of visited) {
                if (value == i + rest) {
                    pos = key;
                    break;
                }
            }
            k = 0x0;
        }
    }
    console[_0x1ead4a(0x5)](pos);
}
function a0_0x469d() {
    const _0x5f4ef9 = [
        'split',
        'map',
        'get',
        'set',
        'size',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x469d = function () {
        return _0x5f4ef9;
    };
    return a0_0x469d();
}
main(require('fs')[a0_0x4d3926(0x6)](a0_0x4d3926(0x7), a0_0x4d3926(0x8)));