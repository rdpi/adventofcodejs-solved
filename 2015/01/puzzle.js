const readline = require('readline');
const fs = require('fs');
const inquirer = require('requirer');

let input = fs.readFileSync(`${__dirname}/input`,'utf8').split('\n');

module.exports = {
  solution1: async () => {
    answer = 0;
    input.forEach((line) => {
      let code = line.split(',');
      for (let x = 0; x < 100; x++){
        for (let y = 0; y < 100; y++){
          code = line.split(',');
          for (let i = 0; i < code.length; i++){
            code[i] = parseInt(code[i]);
          }
          code[1] = x;
          code[2] = y;
          for (let i = 0; i < code.length; i += 4){
            if(code[i] == 1){
              code[code[i+3]] = code[code[i+2]]+code[code[i+1]];
            }
            else if(code[i] == 2){
              code[code[i+3]] = code[code[i+2]]*code[code[i+1]];
            }
            else if (code[i] == 3){
              var questions = [{
                type: 'input',
                name: 'input',
                message: "Input",
              }]

              inquirer.prompt(questions).then(answers => {
                parseInt()
              })
              let inp = await inquirer.prompt(questions);
              code[code[i+1]] = parseInt(inp);
            }
            else if (code[i] == 4){
              console.log(code[code[i+1]])
            }
            else if (code[i] == 99){
              if(code[0] == 19690720){
                console.log((x*100)+y);
                answer =(x*100)+y;
              }
              break;
            }
          }
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
