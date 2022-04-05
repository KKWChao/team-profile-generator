const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const TeamManager = require("../lib/TeamManager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

class Builder {
  constructor() {
    this.counter = 0;
  }

  // start the page builder
  initializeBuilder() {
    inquirer
      .prompt({
        type: 'text',
        name: 'name',
        message: 'Enter your name'
      })
  }


}