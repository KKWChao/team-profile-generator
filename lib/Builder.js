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
      },
      {
        type: "number",
        name: "id",
        message: "Please Enter Employee ID",
      },
      {
        type: "input",
        name: "email",
        message: "Please Enter Employee Email",
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
              }
            ])
            .then(({ office }) => {
              this.employees.push(
                (this.TeamManager = new TeamManager(name, id, email, office))
              );
              // consolelog
              console.log(this.employees);
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

          // PAGE TEMPLATE GOES HERE
          const teamPage = teamPageGenerator(this.employees)
          fs.writeFile('./index.html', teamPage, err => {if (err) throw new Error(err)
          console.log('Page Created!')})
        }
      })
  }

  // testing for page creation
  createPage(data) {
    const teamPage = teamPageGenerator(data)
    fs.writeFile('./index.html', teamPage, err => {if (err) throw new Error(err)
    console.log('Page Created!')})
  }

}

module.exports = Builder;
