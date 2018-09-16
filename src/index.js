module.exports = function check(str, bracketsConfig) {
  let masOpen = [];
  let masClose = [];
  let stek = [];

  for (let i = 0; i < bracketsConfig.length; i++){
      masOpen.push(bracketsConfig[i][0]);
      masClose.push(bracketsConfig[i][1]);
  }

  if(str.length % 2 != 0) return false;
  
  for(let i = 0; i < str.length; i++){
      if(masOpen.indexOf(str[i]) != -1){
          if (masClose.indexOf(str[i]) == -1){
              stek.push(str[i]);  // push open brackets                      
          }
          if(masClose.indexOf(str[i])!= -1 && stek[stek.length - 1] != str[i]){
              stek.push(str[i]);  // push open brackets
          } else {
              if (masClose.indexOf(str[i])!= -1 && stek[stek.length - 1] == str[i]){
                  stek.pop(str[i]);
              }
          }
      } else {
      if (masClose.indexOf(str[i])!= -1){  //if bracket is closed
          if (masOpen.indexOf(str[i]) == -1){
              if(stek.length == 0) {
                  return false;
              } else {
                  let couple = false;
                  for (let j = 0; j < masOpen.length; j++){
                      if(stek[stek.length - 1] == masOpen[j] && str[i] == masClose[j]){
                          stek.pop(str[i]);
                          couple = true;  //found a couple
                          break;
                      }
                  }
                  if (!couple) return false;
              }
          }
          if(masOpen.indexOf(str[i]) != -1 && stek[stek.length - 1] == str[i]){
              stek.pop(str[i]);
          }
      }
      }
      if(i == str.length - 1 && stek.length == 0) return true;
      if(i == str.length - 1 && stek.length != 0) return false;
  }
}
