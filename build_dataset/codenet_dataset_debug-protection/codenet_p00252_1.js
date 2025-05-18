function Main(input){
  a=input.split('\n')[0].split(' ').join('');
  console.log(((a=='110'||a=='001')?'Open':'Close'));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));