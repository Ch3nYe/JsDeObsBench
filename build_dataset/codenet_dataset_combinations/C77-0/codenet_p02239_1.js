function main(_stdin){
    const stdin = _stdin.split('\n');
    const len = parseInt(stdin.shift(), 10);

    const data = stdin.filter((e, i) => i < len).map(e => e.split(' ').map(e => parseInt(e, 10)));

    const dists = [null, 0];

    bfs(data[0], dists, data);

    for(const node of data){
        if(dists[node[0]] === undefined) dists[node[0]] = -1;
    }
    dists.shift();
    dists.forEach((e, i) => {
        console.log(i + 1,  e);
    });
}

function bfs(node, dists, data){
    const key = node[0];
    const next = dists[key] + 1;
    const children = node.slice(2);

    for(const child of children){
        if(dists[child] === undefined || dists[child] > next){
            const nextNode = data.find(e => e[0] === child);
            dists[child] = next;
            bfs(nextNode, dists, data);
        }
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));


