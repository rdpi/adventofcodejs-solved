# adventofcodejs
NodeJS interface for Advent of Code

Installation:
`npm install`
log into advent of code
get session ID from inspector
make a .env file:
SESSION='[session ID from browser]';

Commands:
`-d, --day` The day of the problme to solve. Default is current day
`-y, --year` The year of the problem to solve. Default is current year
`-s, --solution` The solution to solve for (each day has two problems/ two solutions). Default is solution 1
`-u, --upload` Upload the solution directly to Advent of Code

Usage: 
Enter your solution into the templates, then run program to get the inputs and solve, and optionally upload to advent of code

Examples:
// solve the first problem for the current day
node index.js solve 

//solve the second problem
node index.js solve --solution=2 

//upload first solution
node index,js solve --solution=1 --upload

//upload second solution
node index.js solve --solution=2 --upload

//solve and upload for different year
node index.js solve --day=1 --year=2018 --solution=2 --upload
