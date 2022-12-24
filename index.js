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
            message: 'What was your motivation?',
            name: 'motive'
        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name: 'whyBuild'
        },
        {
            type: 'input',
            message: 'what problem does it solve?',
            name: 'problem'
        },
        {
            type: "input",
            message: "what did you learn?",
            name: 'learned'
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
            message: "Please Enter the Collaborators that helped you with this project: ",
            name: 'collaborators'
        },
        {
            type: "input",
            message: "Please tell others how they can contribute: ",
            name: "coontribution"
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
        },
        {
            type: "input",
            message: "Please enter your github username: ",
            name: "github"
        }
    ])
    .then((data) => {
        fs.writeFile('README.md', 
`# ${data.title}

## Table of Contents:
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Credits](#credits)
5. [How to Contribute](#contribute)
6. [License](#license)
7. [Tests](#tests)
8. [Questions](#questions)

<a name="description"></a>
## Description: 
${data.motive}
${data.whyBuild}
${data.problem}
${data.learned}

<a name="installation"></a>
## Installation: 
${data.install}

<a name="usage"></a>
## Usage: 
${data.usage}

<a name="credits"></a>
## Credits: 
${data.collaborators}

<a name="contribute"></a>
## How to Contribute:
${data.contribution}

<a name="license"></a>
## License: 
${data.license}

<a name="tests"></a>
## Tests: 
${data.test}

<a name="questions"></a>
## Questions 
If you have any questions regarding me and my website please contact me with the links below.

### Contact me:
email: ${data.email}
github: <a href=github.com/${data.github}>github account</a>`, 

        (err) => {
                if (err) {
                    console.log(err);
            } else {
                console.log("success!");
            }
    })});