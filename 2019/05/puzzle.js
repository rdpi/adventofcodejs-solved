const readline = require('readline');
const fs = require('fs');
readlineSync = require('readline-sync');

let input = fs.readFileSync(`${__dirname}/input`,'utf8').split('\n');

module.exports = {
  solution1: () => {
    answer = 0;
    input.forEach((line) => {
      let code = line.split(',');
      code.forEach((a, b) => {
        code[b] = parseInt(code[b]);
      })
      let param1 = 0;
      let param2 = 0;
      let param3 = 0;
      let opcode = 0;
      let inc = 4;
      for (let i = 0; i < code.length; i += inc){
        opcode = code[i] % 100;
        param1 = Math.floor((code[i] % 1000) / 100);
        param2 = Math.floor((code[i] % 10000) / 1000);
        param3 = Math.floor((code[i] % 100000) / 10000);
        if(opcode == 1){
          let a = parseInt((param1) ? code[i+1] : code[code[i+1]]);
          let b = parseInt((param2) ? code[i+2] : code[code[i+2]]);
          code[code[i+3]] = a+b;
          inc = 4;
        }
        else if(opcode == 2){
          let a = parseInt((param1) ? code[i+1] : code[code[i+1]]);
          let b = parseInt((param2) ? code[i+2] : code[code[i+2]]);
          code[code[i+3]] = a*b;
          inc = 4;
        }
        else if (opcode == 3){
          let val = parseInt(readlineSync.question('Input: '))
          code[code[i+1]] = val;
          inc = 2;
        }
        else if (opcode == 4){
          let a = parseInt((param1) ? code[i+1] : code[code[i+1]]);
          console.log(a)
          inc = 2;
        }
        else if (opcode == 5){
          let a = parseInt((param1) ? code[i+1] : code[code[i+1]]);
          let b = parseInt((param2) ? code[i+2] : code[code[i+2]]);
          if(a !== 0){
            i = b;
            inc = 0;
          }
          else{
            inc = 3;
          }
        }
        else if (opcode == 6){
          let a = parseInt((param1) ? code[i+1] : code[code[i+1]]);
          let b = parseInt((param2) ? code[i+2] : code[code[i+2]]);
          if(a === 0){
            i = b;
            inc = 0;
          }
          else{
            inc = 3;
          } 
        }
        else if (opcode == 7){
          let a = parseInt((param1) ? code[i+1] : code[code[i+1]]);
          let b = parseInt((param2) ? code[i+2] : code[code[i+2]]);
          if(a < b){
            code[code[i+3]] = 1
          }
          else{
            code[code[i+3]] = 0;
          }
          inc = 4;
        }
        else if (opcode == 8){
          let a = parseInt((param1) ? code[i+1] : code[code[i+1]]);
          let b = parseInt((param2) ? code[i+2] : code[code[i+2]]);
          if(a == b){
            code[code[i+3]] = 1;
          }
          else{
            code[code[i+3]] = 0;
          }
          inc = 4;
        }
        else if (code[i] == 99){
          break;
        }
        else{
          inc = 1;
        }
      }
    });
    return answer;
  },
  
  solution2: async () => {
    let answer = 0;
    input.forEach((line) => {
    // solution
    });
    return answer;
  }
}
