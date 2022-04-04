/* NEEDED

STEPS:
1. Create Inquirerer messages
2. Create Team manager, Engineer, Intern Options
3. Create HTML template js
4. Create Testing Suite for Options
5. Combine inquirer options 
6. Create Test for combination
7. Link HTML template to inquirer
8. Use Bootstrap/CSS to beautify 
9. Testing


Employees (Class needed)
  Team Manager
  - Name
  - Position
  - ID
  - Email
  - Office Number

  Engineer
  - Name
  - ID
  - Emial
  - Github UserName <- link

  Intern 
  - Name
  - ID
  - Email
  - School
*/

const inquirer = require('inquirer');
const fs = require('fs')

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What'
    }
  ])