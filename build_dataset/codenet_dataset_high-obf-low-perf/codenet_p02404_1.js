let content = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', buf => {
  content += buf;
});
process.stdin.on('end', () => {
  const rects = content
    .trim()
    .split('\n')
    .map(line => line.split(' ').map(n => parseInt(n, 10)));

  for (const rect of rects) {
    if (rect[0] !== 0 || rect[1] !== 0) {
      console.log(drawReact(rect));
    }
  }
});

const drawReact = ([h, w]) => {
  const hline = '#'.repeat(w) + '\n';
  return hline + `#${'.'.repeat(w - 2)}#\n`.repeat(h - 2) + hline;
};
