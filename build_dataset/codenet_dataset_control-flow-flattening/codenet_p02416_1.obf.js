let content = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', buf => {
    content += buf;
});
process['stdin']['on']('end', () => {
    const lines = content['trim']()['split']('\x0a')['slice'](0x0, -0x1);
    const result = lines['map'](num => num['split']('')['map'](n => parseInt(n, 0xa))['reduce']((prev, cur) => prev + cur));
    console['log'](result['join']('\x0a'));
});