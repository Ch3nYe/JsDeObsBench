function a0_0x12a6() {
    const _0x4eafbc = [
        'split',
        'map',
        'OOwaA',
        'RoIpg',
        'max',
        'pLZHJ',
        'log',
        'stdin',
        'data',
        'end'
    ];
    a0_0x12a6 = function () {
        return _0x4eafbc;
    };
    return a0_0x12a6();
}
function a0_0x1251(DkoHdg, key) {
    const stringArray = a0_0x12a6();
    a0_0x1251 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1251(DkoHdg, key);
}
const a0_0x2673d7 = a0_0x1251;
const processData = lines => {
    const _0x326ec5 = a0_0x1251;
    const [n, m] = lines[0x0][_0x326ec5(0x0)]('\x20')[_0x326ec5(0x1)](x => +x);
    let friendships = {};
    for (let i = 0x0; i < m; i++) {
        if (_0x326ec5(0x2) === _0x326ec5(0x3)) {
            const [n, m] = lines[0x0][_0x326ec5(0x0)]('\x20')['map'](x => +x);
            let friendships = {};
            for (let i = 0x0; i < m; i++) {
                const f = lines[i + 0x1][_0x326ec5(0x0)]('\x20')[_0x326ec5(0x1)](x => +x);
                let friendItem = friendships[f[0x0]] || friendships[f[0x1]] || {};
                friendships[f[0x0]] = friendItem;
                friendships[f[0x1]] = friendItem;
                friendItem[f[0x0]] = !![];
                friendItem[f[0x1]] = !![];
            }
            let maxCount = 0x1;
            for (let p in friendships) {
                let count = 0x0;
                for (let t2 in friendships[p]) {
                    count++;
                }
                maxCount = Math[_0x326ec5(0x4)](maxCount, count);
            }
            console['log'](maxCount);
        } else {
            const f = lines[i + 0x1][_0x326ec5(0x0)]('\x20')[_0x326ec5(0x1)](x => +x);
            let friendItem = friendships[f[0x0]] || friendships[f[0x1]] || {};
            friendships[f[0x0]] = friendItem;
            friendships[f[0x1]] = friendItem;
            friendItem[f[0x0]] = !![];
            friendItem[f[0x1]] = !![];
        }
    }
    let maxCount = 0x1;
    for (let p in friendships) {
        let count = 0x0;
        for (let t2 in friendships[p]) {
            if (_0x326ec5(0x5) !== 'pLZHJ') {
                let count = 0x0;
                for (let t2 in friendships[p]) {
                    count++;
                }
                maxCount = Math[_0x326ec5(0x4)](maxCount, count);
            } else {
                count++;
            }
        }
        maxCount = Math[_0x326ec5(0x4)](maxCount, count);
    }
    console[_0x326ec5(0x6)](maxCount);
};
let i = '';
process[a0_0x2673d7(0x7)]['on'](a0_0x2673d7(0x8), c => i += c);
process[a0_0x2673d7(0x7)]['on'](a0_0x2673d7(0x9), () => {
    const {EOL: EOL} = require('os');
    const lines = i['split'](EOL);
    processData(lines);
});