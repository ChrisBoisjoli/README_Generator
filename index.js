const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('generateMarkdown');


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
// prompt for questions
inquirer.prompt([
    {
        type: 'input',
        name: 'projTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'projDescrip',
        message: 'Write a description of your project',
    },
    {
        type: 'input',
        name: 'projInstall',
        message: 'Write your installation instructions',
    },
    {
        type: 'input',
        name: 'projUsage',
        message: 'Write your usage instructions',
    },
    {
        type: 'input',
        name: 'projContrib',
        message: 'Write your contribution guidelines',
    },
    {
        type: 'input',
        name: 'projTests',
        message: 'Write your test criteria',
    },
    {
        type: 'list',
        name: 'projLicense',
        message: 'Which license do you need?',
        choices:['Academic Free License v3.0', 'Apache license 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'BSD 3-clause Clear license', 'Creative Commons license', 'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0', 'Creative Commons Attribution Share Alike 4.0', 'Do What The F*ck You Want To Public License', 'Educational Community License v2.0', 'Eclipse Public License 1.0', 'Eclipse Public License 2.0', 'European Union Public License 1.1', 'GNU Affero General Public License v3.0', 'GNU General Public License family', 'GNU General Public License v2.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License family', 'GNU Lesser General Public License v2.1', 'GNU Lesser General Public License v3.0', 'ISC', 'LaTeX Project Public License v1.3c', 'Microsoft Public License', 'MIT', 'Mozilla Public License 2.0', 'Open Software License 3.0', 'PostgreSQL License', 'PostgreSQL License', 'University of Illinois/NCSA Open Source License', 'The Unlicense', 'zLib License']
      },
      {
        type: 'input',
        name: 'githubUserName',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

]).then((data) =>{
    console.log(data.projTitle, data.projDescrip, data.projInstall, data.projUsage, data.projContrib, data.projTests, data.projLicense, data.githubUserName, data.email);
})


//Description
//Table of contents
//installation
//usage
//license
//contribution
//tests
//questions

//build readme.md

//choose license add badge near top notice added to license section

//github username added to Questions with link to profiel

//email address added to questions how to reach instructions

//table of contents link to section of readme



