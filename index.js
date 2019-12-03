const axios = require('axios');
const dotenv = require('dotenv');
const fs = require('fs');
const yargs = require('yargs');
const FormData = require('form-data');
dotenv.config();

const main = async (year, day, upload, solution) => {
  const config = { 
    headers: {
      Cookie: `session=${process.env.SESSION}`,
    }
  }
  // get our input if we don't have it yet
  try {
    if (!fs.existsSync(`${year}/${day}/input`)) {
      try {
        let input = await axios.get(`https://adventofcode.com/${year}/day/${day}/input`, config);
        fs.writeFileSync(`./${year}/${day}/input`, input.data, { flag: 'w+' })
        //file written successfully
      } catch (err) {
        console.error(err.response.data);
        return 1;
      }
    }
  } catch(err) {
    console.error(err);
    return 1;
  }

  const puzzle = require(`./${year}/${day}/puzzle`);
  const answer = (solution === 1) ? await puzzle.solution1() : await puzzle.solution2();
  console.log(`Solution: ${answer}`);

  if(upload){
    console.log('Uploading solution...');
    let data = new FormData();
    data.append('level', solution);
    data.append('answer', answer);
    axios.post(`https://adventofcode.com/${year}/day/${day}/`, config).then((res) =>{
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }
}

const date = new Date();
const currYear = date.getFullYear();
const currDay = date.getDate();
const argv = yargs
    .command({
        command: 'solve',
        describe: 'Command to solve puzzles',
    })
    .option('year', {
      alias: 'y',
      description: 'The year path',
      type: 'number',
      default: currYear,
    })
    .option('day', {
      alias: 'd',
      description: 'The day path',
      type: 'number',
      default: currDay,
    })
    .option('solution', {
      alias: 's',
      description: 'The solution to use (1 or 2)',
      type: 'number',
      default: 1,
    })
    .option('u', {
      alias: 'upload',
      description: 'Upload solution',
      type: 'boolean',
    })
    .argv;

if(argv.d === undefined){
  console.log("day required");
  console.log(argv)
  return 1;
}
if(argv.y === undefined){
  console.log("year required");
  return 1;
}

main(argv.y, argv.d, argv.u, argv.s);