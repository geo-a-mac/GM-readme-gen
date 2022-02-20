// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const mockData = {
    title: 'namaDama',
    description:'blabla',
    installation: 'quickly',
    usage: 'slowly',
    license: 'MIT',
    contributing: 'do something',
    tests: 'try something',
    questions: 'none'
}



// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the project title? (required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the project title!');
                return false;
            }
        }
      },
      {
          type: 'input',
          name: 'description',
          message: 'Enter a description of your project (required)',
          validate: nameInput => {
              if(nameInput) {
                  return true;
              } else {
                  console.log('Please enter a description of your project!');
                  return false;
              }
          }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions (required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }
        }
        },  
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage (required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter usage!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license does this app have?',
            choices: ['BSD 3-Clause', 'BSD 2-Clause', 'MIT']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contributing guidelines (required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter contribution guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter tests (required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter tests!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter questions (required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter questions!');
                    return false;
                }
            }
        },
   
    ]);
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, err => {
        if (err) return err;
    })
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(data => generateMarkdown(data))
    .then(markdown => writeToFile('SampleReadme.md', markdown));
}

// Function call to initialize app
init();
