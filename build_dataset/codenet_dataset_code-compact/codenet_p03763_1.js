function Main(input) {
  input=input.split("\n");
  var S="abcdefghijklmnopqrstuvwxyz".split('');
  var array=new Array(26);
  array.fill(0);
  var temp;
  for(var i=1;i<input.length;i++){
    temp=new Array(26);
    temp.fill(0);
    for(var j=0;j<input[i].length;j++){
      temp[S.findIndex(e=>{return e===input[i][j];})]++;
    }
    
    for(var j=0;j<26;j++){
      if(array[j]>temp[j]||i===1){
        array[j]=temp[j];
      }
    }
  }
  var ret='';
  array.forEach((e,i)=>{
    ret+=S[i].repeat(e);
  });
  console.log(ret);

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
  
  
