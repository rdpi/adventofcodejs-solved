const axios = require('axios');
const dotenv = require('dotenv');
const fs = require('fs');
const FormData = require('form-data');
dotenv.config();

module.exports = {
  main: async (year, day, upload, solution) => {
    const dayPath = day.padStart(2, "0");
    const config = { 
      headers: {
        Cookie: `session=${process.env.SESSION}`,
      }
    }
    // get our input if we don't have it yet
    try {
      if (!fs.existsSync(`${year}/${dayPath}/input`)) {
        try {
          let input = await axios.get(`https://adventofcode.com/${year}/day/${day}/input`, config);
          fs.writeFileSync(`./${year}/${dayPath}/input`, input.data, { flag: 'w+' })
          //file written successfully
        } catch (err) {
          console.error(err);
          return 1;
        }
      }
    } catch(err) {
      console.error(err);
      return 1;
    }

    const puzzle = require(`./${year}/${dayPath}/puzzle`);
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
}