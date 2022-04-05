const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const TeamManager = require("../lib/TeamManager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

class Builder {
  constructor() {
    this.counter = 0;
    this.employees = [];
    this.currentEmployee;
  }

  // start the page builder
  initializeBuilder() {
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
              });
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
                // consolelog
                console.log(this.employees);
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
                // consolelog
                console.log(this.employees);
              });
            break;
        }
      });
  }
}

module.exports = Builder;
