function Main(input) {
  input=input.split("\n");
  if(input[input.length-1]===''){
    input.pop();
  }
  const N=input[0]-0;
  var colors=[];
  var temp;
  var min,max,mid;
  for(var i=1;i<input.length;i++){
    temp=input[i]-0;
    if(colors.length===0){
      colors.push(temp);
      continue;
    }
    if(temp<=colors[0]){
      colors.unshift(temp);
      continue;
    }
    if(temp>colors[colors.length-1]){
      colors[colors.length-1]=temp;
      continue;
    }
    min=0;
    max=colors.length-1;
    while(max-min>1){
      mid=Math.floor((max+min)/2);
      if(colors[mid]<=temp){
        max=mid;
      }else{
        min=mid;
      }
    }
    colors[min]=temp;
  }
  console.log(colors.length);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));