const BKRT = "\n";
const SPAC = " ";
const NOSP = "";

function Main(input){
	input = [].concat(...input.split(BKRT).map(a=>a.split(SPAC)));
  const strShift = ()=>input.shift();
  const intShift = ()=>~~input.shift();
  
  return ~~(intShift()-intShift())%intShift();
}

// If you are interested in the algorithms I used, 
// there is no need to read down from this line.

((b,c,d)=>"undefined"!=typeof require?console.log(Main(require("fs").readFileSync("/dev/stdin","utf8"))):[b=b.split("\n").slice(1,-1).join("\n"),c=function(){try{return Main(b)}catch(f){return f.stack||f.message}}(),d=typeof c,"string"==d||(c=JSON.stringify(c)),$("<form>").append([[10,b],0,[1,d],0,[10,c]].map(f=>$(f?"<textarea>":"<br>",f&&{rows:f[0],cols:40,text:f[1]}))).appendTo("body")])(`
1234
150
100
`);