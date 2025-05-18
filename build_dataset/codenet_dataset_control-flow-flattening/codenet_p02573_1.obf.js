const processData = lines => {
    const fHiXgo = {
        'Qrqhq': function (x, y) {
            return x + y;
        }
    };
    const [n, m] = lines[0x0]['split']('\x20')['map'](x => +x);
    let friendships = {};
    for (let i = 0x0; i < m; i++) {
        const f = lines[fHiXgo['Qrqhq'](i, 0x1)]['split']('\x20')['map'](x => +x);
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
        maxCount = Math['max'](maxCount, count);
    }
    console['log'](maxCount);
};
let i = '';
process['stdin']['on']('data', c => i += c);
process['stdin']['on']('end', () => {
    const JlKSNK = {
        'tVSna': function (callee, param1) {
            return callee(param1);
        },
        'JvJBE': function (callee, param1) {
            return callee(param1);
        }
    };
    const {EOL: EOL} = JlKSNK['tVSna'](require, 'os');
    const lines = i['split'](EOL);
    JlKSNK['JvJBE'](processData, lines);
});