const inquirer = require("inquirer");

const Employee = require("../lib/Employee.js");
const TeamManager = require("../lib/TeamManager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

const fs = require("fs");
const teamPageGenerator = require('../lib/PageTemplate.js');

class Builder {
  constructor() {
    this.counter = 0;
    this.employees = [];
    this.currentEmployee;
  }

  // start the page builder
  initializeBuilder() {
    this.newEmployee()
  }

  // checking for another employee to add
  newEmployee() {
    inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please Enter Employee Name",
        validate: name => {
          if (name) {
            return true;
          } else {
            return console.log("Please Enter a Name")
          }
        }
      },
      {
        type: "number",
        name: "id",
        message: "Please Enter Employee ID",
        validate: id => {
          if (id || typeof(id) === Number) {
            return true;
          } else {
            return console.log("Please Enter the Employee ID Number")
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "Please Enter Employee Email",
        validate: email => {
          if (email) {
            return true;
          } else {
            return console.log("Please enter the Employee Email")
          }
        }
      },
      {
        type: "list",
        name: "employeeType",
        message: "Please Select Employee Type",
        choices: ["Team Manager", "Engineer", "Intern"],
      },
    ])

    .then(({ name, id, email, employeeType }) => {
      switch (employeeType) {
        case "Team Manager":
          inquirer
            .prompt([
              {
                type: "input",
                name: "office",
                message: "Please Enter the Office Number",
                validate: office => {
                  if (office) {
                    return true;
                  } else {
                    return console.log("Please Enter the Office Number")
                  }
                }
              }
            ])
            .then(({ office }) => {
              this.employees.push(
                (this.TeamManager = new TeamManager(name, id, email, office))
              );
            })
            .then(() => {
              this.nextEmployee()
            })
          break;

        case "Engineer":
          inquirer
            .prompt([
              {
                type: "input",
                name: "github",
                message: "Please Enter the Github Username",
                validate: github => {
                  if (github) {
                    return true;
                  } else {
                    return console.log("Please Enter the Engineer Github")
                  }
                }
              }
            ])
            .then(({ github }) => {
              this.employees.push(
                (this.TeamManager = new Engineer(name, id, email, github))
              );
            })
            .then(() => {
              this.nextEmployee()
            });
          break;

        case "Intern":
          inquirer
            .prompt([
              {
                type: "input",
                name: "school",
                message: "Please Enter the School Name",
                validate: school => {
                  if (school) {
                    return true;
                  } else {
                    return console.log("Please Enter the School Name")
                  }
                }
              }
            ])
            .then(({ school }) => {
              this.employees.push(
                (this.TeamManager = new Intern(name, id, email, school))
              );
            })
            .then(() => {
              this.nextEmployee()
            });
          break;
      }
    });
  }

  nextEmployee() {
    inquirer
      .prompt([
        {
          type: 'confirm',
          name: 'confirmer',
          message: 'Add Another Employee?'
        }
      ])
      .then(({ confirmer }) => {
        if (confirmer) {
          this.newEmployee()
        } else {
          var tempEmp = this.employees
          // PAGE TEMPLATE GOES HERE
          const teamPage = teamPageGenerator(tempEmp)
          fs.writeFile('./index.html', teamPage, err => {if (err) throw new Error(err)
          console.log('Page Created!')})
        }
      })
  }
}

module.exports = Builder;
