// Packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./generateMarkdown');


// Array of questions for user input
const questions = [
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
        choices:[ 'Apache', 'GNU', 'MIT', 'BSD', 'Unlicense']
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
];

// Function to write README file
// function writeToFile(fileName, data) {}

// Function to initialize app
function init() {
    return inquirer.prompt (questions).then((data)=> {
        generateMarkdown();
        const projReadme = generateMarkdown(data);
        
        fs.writeFile('README.md', projReadme, (err) => err ? console.log(err) : console.log('Successfully created README.md!'))
    })
    
}

// Function call to initialize app
init();
