const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your README file?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please enter a description of your website: ',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Please enter installation instructions: ',
            name: 'install'
        },
        {
            type: 'input',
            message: 'Please enter usage information: ',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Please enter contribution guidelines: ',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'Please enter test instructions: ',
            name: 'test'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose your license: ',
            choices: ['MIT license', 'Apache License 2.0', 'GNU General Public License v3.0']
        },
        {
            type: 'input',
            message: 'Please enter your email: ',
            name: 'email'
        }
    ])
    .then((data) => {
        fs.writeFile('README.md', 
            `# ${data.title}

            ## Description: 
            ${data.description}
            ## Installation: 
            ${data.install}
            ## Usage: 
            ${data.usage}
            ## Contributing: 
            ${data.contribution}
            ## Tests: 
            ${data.test}
            
            ## Questions
            ###Contact me:
            email: ${data.email}`, 
            (err) => {
                if (err) {
                    console.log(err);
            } else {
                console.log("success!");
            }
    })});