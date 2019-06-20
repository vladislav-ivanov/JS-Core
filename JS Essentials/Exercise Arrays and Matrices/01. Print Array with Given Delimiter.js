function solve(params){
    let delimeter = params.pop();
    let result = "";
    for(let i = 0;i<params.length;i++){
      if(i===0){
        result = params[i];
      }else{
        result += delimeter + params[i];
      }
    }
    console.log(result);
      
  }