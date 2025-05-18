const config = {
    input: '/dev/stdin',
    newline: '\n'
};

const line = require('fs').readFileSync(config.input, 'utf-8').split(config.newline);

const insert = (arr, x) => arr.unshift(x);
const del = (arr, x) => {
    for (var i = 0; i < arr.length; i++) {
        if (x === arr[i]) break;
    }
    if (i !== arr.length) arr.splice(i, 1);
};
const delFirst = arr => arr.shift();
const delLast = arr => arr.pop();

const cmds = line.slice(1);
const ans = cmds.reduce((acc, x) => {
    const cmd = x.split(' ');
    switch (cmd[0]) {
        case 'insert':
            insert(acc, parseInt(cmd[1]));
            break;
        case 'delete':
            del(acc, parseInt(cmd[1]));
            break;
        case 'deleteFirst':
            delFirst(acc);
            break;
        case 'deleteLast':
            delLast(acc);
            break;
    }

    return acc;
}, []).map(x => x.toString()).join(' ');

console.log(ans);

