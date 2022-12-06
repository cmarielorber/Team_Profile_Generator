//node modules
const inquirer = require("inquirer");
const fs = require("fs");

//link to page
const generateHTML = require('./src/generatedHTML');

//employee profiles
const Engineer = require('./Lib/Engineer');
const Intern = require('./Lib/Intern');
const Manager = require('./Lib/Manager');

//teamarray list
const teamArray = [];

// manager promts
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your manager's name!");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: "Please enter your manager's ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter an ID!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your manager's email.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "Please enter your manager's office number.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter an office number!')
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
        .then(managerInput => {
            const { name, id, email, officeNum } = managerInput;
            const manager = new Manager(name, id, email, officeNum);

            teamArray.push(manager);
            console.log(manager);
        })
};

const addEmployee = () => {
    console.log(`
    =================
    Adding employees to your team
    =================
    `)

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role...",
            choices: ['Engineer', 'Intern', 'Manager']
        },

        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a name!")
                    return false;

                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter an ID!")
                    return false;
                } else {
                    return true;

                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Please enter the employee's GitHub username.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school.",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a school!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmaddEmployee',
            message: 'Would you like to add more team members?',
        }
    ])
        //employee type info
        .then(employeeInput => {

            let { name, id, role, gitHub, school, confirmAddEployee } = employeeInput;
            let teamMember;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, gitHub);

                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school)

                console.log(employee);
            } else if (role === "Manager") {
                employee = new Manager(name, id, email, officeNum)

                console.log(employee);
            }
            teamArray.push(employee);

            if (confirmAddEployee) {
                return addEmployee(teamArray);
            } else {
                return teamArray;
            }
        })
};

//generate HTML using fs
const writeFile = data => {
    fs.writeFile('./dist/team.html', data, err => {
        //if error
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been created! Please click on the team.html.")
        }
    })
};

//call to begin team build
addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(teamHTML);
    })
    .catch(err => {
        console.log(err);
    });
