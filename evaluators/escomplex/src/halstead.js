#!/usr/bin/env node

const getStdin = require('get-stdin');
const escomplex = require('typhonjs-escomplex');

(async () => {
    try {
        // 读取标准输入中的 JavaScript 代码
        const source = await getStdin();
        
        // 分析 JavaScript 代码
        const report = escomplex.analyzeModule(source);
        
        // 输出分析报告
        console.log(JSON.stringify(report, null, 2));
    } catch (error) {
        console.error('Error analysing source code:', error);
    }
})();