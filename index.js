const inquirer = require('inquirer');

const fs = require('fs');

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
]).then((data) =>{
    console.log(data.projTitle, data.projDescrip, data.projInstall, data.projUsage, data.projContrib, data.projTests );
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



