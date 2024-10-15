import chalk from "chalk";

function colorColleagueName(){

// nom des collegues  

const colleagueName1 = "Toto";
const colleagueName2 = "Tata";
const colleagueName3 = "Tutu";
const colleagueName4 = "Tete";

// couleurs

console.log(
    chalk.blue(colleagueName1),
    chalk.red(colleagueName2),
    chalk.yellow(colleagueName3),
    chalk.white(colleagueName4),
);
}

colorColleagueName();